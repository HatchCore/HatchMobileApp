/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Amplify from "aws-amplify";
import * as Linking from "expo-linking";
import * as Notifications from "expo-notifications";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {
  // @ts-ignore
  GRAPHQL_ENDPOINT,
  // @ts-ignore
  AWS_REGION,
  // @ts-ignore
  API_AUTH_TYPE,
  // @ts-ignore
  USER_POOL_ID,
  // @ts-ignore
  USER_POOL_WEB_CLIENT_ID,
  // @ts-ignore
  IDENTITY_POOL_ID,
  // @ts-ignore
  S3_BUCKET,
  // @ts-ignore
  COGNITO_OAUTH_DOMAIN,
} from "react-native-dotenv";
import { Button } from "react-native-elements/dist/buttons/Button";

import { User } from "src/api/types/APISchema";
import Stacks from "src/constants/Stacks";
import { UserContext } from "src/context/UserContext";
import { CONTAINER } from "src/styles/layout/container";
import ProjectStack from "src/ui/ProjectStack";
import RootStack from "src/ui/RootStack";
import SignInWithOAuthScreen from "src/ui/SignInWithOAuthScreen";
import { AuthUtils } from "src/utils/AuthUtils";

const AMPLIFY_CONFIG = {
  // API Settings
  aws_appsync_graphqlEndpoint: GRAPHQL_ENDPOINT,
  aws_appsync_region: AWS_REGION,
  aws_appsync_authenticationType: API_AUTH_TYPE,
  // Auth Settings
  aws_cognito_region: AWS_REGION,
  aws_user_pools_id: USER_POOL_ID,
  aws_user_pools_web_client_id: USER_POOL_WEB_CLIENT_ID,
  aws_cognito_identity_pool_id: IDENTITY_POOL_ID,
  aws_user_files_s3_bucket_region: AWS_REGION,
  aws_user_files_s3_bucket: S3_BUCKET,
  ssr: true,
  Analytics: {
    disabled: true,
  },
  Auth: {
    oauth: {
      domain: COGNITO_OAUTH_DOMAIN,
      scope: ["email", "profile", "openid", "aws.cognito.signin.user.admin"],
      redirectSignIn: Linking.createURL(""),
      redirectSignOut: Linking.createURL(""),
      responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
    cookieStorage: null,
  },
};

Amplify.configure(AMPLIFY_CONFIG);

console.log(AMPLIFY_CONFIG);

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  page: {
    ...CONTAINER.PAGE,
    flex: 1,
    justifyContent: "center",
  },
});

const AuthenticatedApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Stacks.ROOT}
          component={RootStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={Stacks.PROJECT_ROOT} component={ProjectStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [pendingUserAuthCheck, setPendingUserAuthCheck] =
    useState<boolean>(true);

  const userContextValue = {
    user,
    setUser,
  };

  useEffect(() => {
    const signInUserIfPossible = async () => {
      const userData = await AuthUtils.signInUserIfPossible(setUser);
      console.log(userData);
      setPendingUserAuthCheck(false);
    };

    signInUserIfPossible();
  }, []);

  const renderApp = () => {
    if (pendingUserAuthCheck) {
      return (
        <View style={styles.page}>
          <ActivityIndicator />
        </View>
      );
    }
    if (user) {
      return <AuthenticatedApp />;
    }
    return <SignInWithOAuthScreen />;
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {renderApp()}
    </UserContext.Provider>
  );
};

export default App;
