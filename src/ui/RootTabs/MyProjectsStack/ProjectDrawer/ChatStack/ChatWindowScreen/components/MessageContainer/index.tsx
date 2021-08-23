import React, { useEffect, useState, useRef } from "react";

import { useRoute } from "@react-navigation/native";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-elements";

import {
  beginChatMessageSubscriptionInChannel,
  getChatChannelMessages,
} from "src/api/client/project";
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
  const scrollViewRef = useRef(null);

  const [channelMessages, setChannelMessages] = useState<
    ChatMessageWithMetadata[]
  >([]);

  useEffect(() => {
    if (route?.params?.chatChannelId) {
      const fetchChannelMessages = async () => {
        const chatChannelMessages = await getChatChannelMessages(
          route.params.chatChannelId
        );
        setChannelMessages(chatChannelMessages);
      };
      fetchChannelMessages();
    }
  }, [route.params]);

  useEffect(() => {
    if (route?.params?.chatChannelId) {
      const subscription = beginChatMessageSubscriptionInChannel(
        route.params.chatChannelId,
        (response) => {
          const { value } = response;
          const incomingMessage = value.data.onCreateChatMessageInChannel;
          console.debug("Got incoming message in channel");
          console.debug(incomingMessage);
          setChannelMessages([...channelMessages, incomingMessage]);
        }
      );

      return () => subscription.unsubscribe();
    }

    return () => null;
  }, [channelMessages, route?.params?.chatChannelId, user?.user_id]);

  return (
    <ScrollView
      style={[style, styles.container]}
      ref={scrollViewRef}
      onContentSizeChange={() => {
        if (scrollViewRef?.current) {
          const scrollRef = scrollViewRef.current;
          scrollRef?.scrollToEnd({ animated: false });
        }
      }}
    >
      {channelMessages?.map((message) => {
        return (
          <ChatMessageBubble
            message={message.chat_message}
            fromMe={message.user_id === user?.user_id}
          />
        );
      })}
    </ScrollView>
  );
};

MessageContainer.defaultProps = {
  style: undefined,
};

export default MessageContainer;
