import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Project, User } from "src/api/types/APISchema";
import KeyboardAvoidingComponent from "src/components/KeyboardAvoidingComponent";
import Screens from "src/constants/Screens";

import ChatChannelsScreen from "./ChatChannelsScreen";
import ChatWindowScreen from "./ChatWindowScreen";

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
    <KeyboardAvoidingComponent>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.CHAT_CHANNELS}
          options={{ headerShown: false }}
        >
          {() => <ChatChannelsScreen project={project} user={user} />}
        </Stack.Screen>
        <Stack.Screen name={Screens.CHAT_WINDOW} options={{ headerTitle: "" }}>
          {() => <ChatWindowScreen user={user} />}
        </Stack.Screen>
      </Stack.Navigator>
    </KeyboardAvoidingComponent>
  );
};

export default ChatStack;
