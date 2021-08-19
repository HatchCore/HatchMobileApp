/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Stacks from "src/constants/Stacks";

import ChatStack from "./ChatStack";

const Drawer = createDrawerNavigator();

const ProjectStack = () => {
  return (
    <Drawer.Navigator initialRouteName={Stacks.CHAT}>
      <Drawer.Screen name={Stacks.CHAT}>{() => <ChatStack />}</Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default ProjectStack;
