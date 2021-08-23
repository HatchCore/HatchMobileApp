import React, { useState } from "react";

import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { v4 as uuidv4 } from "uuid";

import { createChatMessage } from "src/api/client/project";
import {
  ChatChannel,
  ChatChannelMetadata,
  User,
} from "src/api/types/APISchema";

import InputBox from "./components/InputBox";
import MessageContainer from "./components/MessageContainer";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  columnContainer: {
    // flex: 1,
    // justifyContent: "space-around",
    height: "100%",
    // alignItems: "stretch",
    flexDirection: "column",
  },
  messageContainer: {
    flex: 1,
    flexGrow: 9,
    // flexShrink: 1,
    // flexBasis: 100,
  },
  inputContainer: {
    flex: 1,
    height: "auto",
    flexGrow: 1,
    alignSelf: "stretch",
    // flexBasis: 42,
  },
});

interface ChatWindowScreenProps {
  user: User | null;
}

const ChatWindowScreen: React.FunctionComponent<ChatWindowScreenProps> = (
  props: ChatWindowScreenProps
) => {
  const { user } = props;

  const route = useRoute();

  const [messageInput, setMessageInput] = useState<string>("");

  const sendMessage = async (message: string) => {
    const chatMessageId = uuidv4();
    const sentMessage = await createChatMessage(
      chatMessageId,
      user.user_id,
      route?.params?.chatChannelId,
      message,
      []
    );

    setMessageInput("");
    return sentMessage;
  };

  return (
    <View style={styles.columnContainer}>
      <MessageContainer style={styles.messageContainer} user={user} />
      <InputBox
        style={styles.inputContainer}
        user={user}
        value={messageInput}
        onChangeText={setMessageInput}
        sendMessage={sendMessage}
      />
    </View>
  );
};

export default ChatWindowScreen;
