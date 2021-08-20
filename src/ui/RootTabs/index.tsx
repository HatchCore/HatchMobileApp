/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Screens from "src/constants/Screens";
import { UserContext } from "src/context/UserContext";

import MyProjectsStack from "./MyProjectsStack";
import PushNotificationsScreen from "./PushNotificationsScreen";

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => {
        return (
          <Tab.Navigator screenOptions={{ tabBarHideOnKeyboard: true }}>
            <Tab.Screen
              name={Screens.MY_PROJECTS}
              options={{ headerShown: false }}
            >
              {(props) => <MyProjectsStack user={user} {...props} />}
            </Tab.Screen>
            <Tab.Screen
              name={Screens.PUSH_NOTIFICATIONS}
              component={PushNotificationsScreen}
            />
          </Tab.Navigator>
        );
      }}
    </UserContext.Consumer>
  );
};

export default RootStack;
