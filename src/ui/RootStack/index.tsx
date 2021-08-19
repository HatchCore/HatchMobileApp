/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

import Screens from "src/constants/Screens";
import { UserContext } from "src/context/UserContext";
import { AuthUtils } from "src/utils/AuthUtils";

import MyProjectScreen from "./MyProjectsScreen";
import PushNotificationsScreen from "./PushNotificationsScreen";

const Drawer = createDrawerNavigator();

const RootStack = () => {
  return (
    <UserContext.Consumer>
      {({ user, setUser }) => {
        return (
          <Drawer.Navigator
            initialRouteName={Screens.MY_PROJECTS}
            drawerContent={(props) => {
              return (
                <DrawerContentScrollView {...props}>
                  <DrawerItemList {...props} />
                  <DrawerItem
                    label="Sign Out"
                    onPress={() => AuthUtils.signOut(setUser)}
                  />
                </DrawerContentScrollView>
              );
            }}
          >
            <Drawer.Screen name={Screens.MY_PROJECTS}>
              {(props) => <MyProjectScreen user={user} {...props} />}
            </Drawer.Screen>
            <Drawer.Screen
              name={Screens.PUSH_NOTIFICATIONS}
              component={PushNotificationsScreen}
            />
          </Drawer.Navigator>
        );
      }}
    </UserContext.Consumer>
  );
};

export default RootStack;
