import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screens from "src/constants/Screens";

import ChatScreen from "./ChatScreen";

const Stack = createNativeStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.CHAT_CHANNELS}
        component={ChatScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
