import React from 'react';
import Amplify from "aws-amplify";
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import {
  // @ts-ignore
  GRAPHQL_ENDPOINT, AWS_REGION, API_AUTH_TYPE, USER_POOL_ID, USER_POOL_WEB_CLIENT_ID,
  // @ts-ignore
  IDENTITY_POOL_ID, S3_BUCKET, COGNITO_OAUTH_DOMAIN, BASE_URL
} from "react-native-dotenv";
import MyProjects from './src/screens/MyProjects';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


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
      redirectSignIn: `${BASE_URL}/login/oauth`,
      redirectSignOut: `${BASE_URL}/`,
      responseType: "code", // or 'token', note that REFRESH token will only be generated when the responseType is code
    },
    cookieStorage: null,
  },
};

Amplify.configure(AMPLIFY_CONFIG);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="My Projects">
        <Drawer.Screen name="My Projects" component={MyProjects} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
