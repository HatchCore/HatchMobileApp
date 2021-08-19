import React, { useState } from "react";

import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
import { Button, Input } from "react-native-elements";
import { SocialIcon } from "react-native-elements/dist/social/SocialIcon";

import { UserContext } from "src/context/UserContext";
import { MARGIN } from "src/styles/common/spacing";
import { FONT_SIZE, FONT_WEIGHT } from "src/styles/common/typography";
import { CONTAINER } from "src/styles/layout/container";
import { AuthUtils } from "src/utils/AuthUtils";

const styles = StyleSheet.create({
  page: {
    ...CONTAINER.PAGE,
    flex: 1,
    justifyContent: "center",
  },
  header: {
    ...FONT_SIZE.H1,
    ...FONT_WEIGHT.BOLD,
    marginBottom: MARGIN.M,
  },
  socialButton: {
    borderRadius: 3,
    margin: 0,
    marginTop: MARGIN.S,
  },
});

const SignInWithOAuthScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pendingSignIn, setPendingSignIn] = useState(false);

  return (
    <UserContext.Consumer>
      {({ setUser }) => {
        return (
          <View style={styles.page}>
            {pendingSignIn ? (
              <ActivityIndicator />
            ) : (
              <>
                <Text style={styles.header as TextStyle}>Sign In</Text>
                <Input
                  textContentType="username"
                  placeholder="Username"
                  value={username}
                  onChangeText={(value) => setUsername(value)}
                />
                <Input
                  secureTextEntry
                  textContentType="password"
                  placeholder="Password"
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                />
                <Button
                  title="Sign In"
                  onPress={async (event) => {
                    event.preventDefault();
                    setPendingSignIn(true);
                    const user = await AuthUtils.signIn(
                      username,
                      password,
                      setUser
                    );
                    console.log(user);
                    setPendingSignIn(false);
                  }}
                />
                <SocialIcon
                  style={styles.socialButton}
                  title="Sign In With Google"
                  button
                  type="google"
                  onPress={async () => {
                    setPendingSignIn(true);
                    const user = await AuthUtils.federatedSignIn(
                      CognitoHostedUIIdentityProvider.Google,
                      setUser
                    );
                    console.log(user);
                    setPendingSignIn(false);
                  }}
                />
              </>
            )}
          </View>
        );
      }}
    </UserContext.Consumer>
  );
};

export default SignInWithOAuthScreen;
