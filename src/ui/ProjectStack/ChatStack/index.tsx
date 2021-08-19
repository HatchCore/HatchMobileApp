import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Project, User } from "src/api/types/APISchema";
import Screens from "src/constants/Screens";

import ChatChannelsScreen from "./ChatChannelsScreen";

const Stack = createNativeStackNavigator();

interface ChatStackProps {
  project: Project | null;
  user: User | null;
}

const ChatStack: React.FunctionComponent<ChatStackProps> = (
  props: ChatStackProps
) => {
  const { project, user } = props;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.CHAT_CHANNELS}
        options={{ headerShown: false }}
      >
        {() => <ChatChannelsScreen project={project} user={user} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ChatStack;
