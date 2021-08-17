import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { Auth } from "aws-amplify";

import { getUserByEmail } from "src/api/client/user";
import { User } from "src/api/types/APISchema";

export namespace AuthUtils {
  export const getCurrentAuthenticatedUser = async (
    retries: number = 8
  ): Promise<any> => {
    console.log(`Retries: ${retries}`);
    try {
      // TODO: There is some weird behavior where this call returns no user even though there is a user
      return await Auth.currentAuthenticatedUser();
    } catch (error) {
      if (retries > 0) {
        await new Promise((r) => setTimeout(r, 1000));
        return getCurrentAuthenticatedUser(retries - 1);
      }
      throw error;
    }
  };

  export const signInUserIfPossible = async (
    setUser: (user: User | null) => void
  ): Promise<User | null> => {
    try {
      // TODO: There is some weird behavior where this call returns no user even though there is a user
      const authUser = await Auth.currentAuthenticatedUser();
      if (!authUser) {
        throw new Error("User is not authenticated");
      }

      // This is to refresh the session if the token has timed out
      await Auth.currentSession();

      const user = await getUserByEmail(authUser.attributes.email);

      if (user) {
        setUser(user);
      }

      return user;
    } catch (error) {
      console.log(error);
    }

    return null;
  };

  export const signIn = async (
    username: string,
    password: string,
    setUser: (user: User | null) => void
  ) => {
    const amplifyUser = await Auth.signIn({ username, password });
    const user = await getUserByEmail(amplifyUser?.attributes?.email);

    if (user) {
      setUser(user);
    }

    return user;
  };

  export const federatedSignIn = async (
    provider: CognitoHostedUIIdentityProvider,
    setUser: (user: User | null) => void
  ) => {
    try {
      const credentials = await Auth.federatedSignIn({
        provider,
      });
      console.log("CREDENTIALS");
      console.log(credentials);
      const amplifyUser = await getCurrentAuthenticatedUser();
      console.log("COGNITO USER");
      console.log(amplifyUser);
      const user = await getUserByEmail(amplifyUser?.attributes?.email);

      if (user) {
        setUser(user);
      }

      return user;
    } catch (error) {
      console.error(error);
    }

    return null;
  };

  export const signOut = async (setUser: (user: User | null) => void) => {
    await Auth.signOut();
    setUser(null);
  };
}
