import React, { useEffect, useState } from "react";

import { useRoute } from "@react-navigation/native";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-elements";

import { getChatChannelMessages } from "src/api/client/project";
import {
  ChatChannel,
  ChatMessageWithMetadata,
  User,
} from "src/api/types/APISchema";
import { PADDING } from "src/styles/common/spacing";

import ChatMessageBubble from "./components/ChatMessageBubble";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: PADDING.M,
  },
});

interface MessageContainerProps {
  style?: ViewStyle;
  user: User | null;
}

const MessageContainer: React.FunctionComponent<MessageContainerProps> = (
  props: MessageContainerProps
) => {
  const { style, user } = props;

  const route = useRoute();

  const [chatMessages, setChatMessages] = useState<
    ChatMessageWithMetadata[] | null
  >(null);

  useEffect(() => {
    if (route?.params?.chatChannelId) {
      const fetchChatMessages = async () => {
        const chatChannelMessages = await getChatChannelMessages(
          route.params.chatChannelId
        );
        setChatMessages(chatChannelMessages);
      };
      fetchChatMessages();
    }
  }, [route.params]);

  return (
    <View style={[style, styles.container]}>
      <FlatList
        data={chatMessages}
        renderItem={({ item }) => {
          return (
            <ChatMessageBubble
              message={item.chat_message}
              fromMe={item.user_id === user?.user_id}
            />
          );
        }}
        keyExtractor={(item) => item.chat_message_id}
      />
    </View>
  );
};

MessageContainer.defaultProps = {
  style: undefined,
};

export default MessageContainer;
