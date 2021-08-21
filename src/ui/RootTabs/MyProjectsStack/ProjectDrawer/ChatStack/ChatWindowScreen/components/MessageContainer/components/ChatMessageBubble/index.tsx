import React from "react";

import { StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "react-native-elements";

import { MARGIN, PADDING } from "src/styles/common/spacing";

const styles = StyleSheet.create({
  message: {
    maxWidth: "70%",
    marginVertical: MARGIN.S,
    padding: PADDING.S,
    borderRadius: 8,
  },
  notFromMe: {
    backgroundColor: "white",
    alignSelf: "flex-start",
  },
  notFromMeText: {
    color: "black",
  },
  fromMe: {
    backgroundColor: "#4287f5",
    alignSelf: "flex-end",
  },
  fromMeText: {
    color: "white",
  },
});

interface ChatMessageBubbleProps {
  style?: ViewStyle;
  message: string;
  fromMe: boolean;
}

const ChatMessageBubble: React.FunctionComponent<ChatMessageBubbleProps> = (
  props: ChatMessageBubbleProps
) => {
  const { style, message, fromMe } = props;
  return (
    <View
      style={[style, styles.message, fromMe ? styles.fromMe : styles.notFromMe]}
    >
      <Text style={fromMe ? styles.fromMeText : styles.notFromMeText}>
        {message}
      </Text>
    </View>
  );
};

ChatMessageBubble.defaultProps = {
  style: undefined,
};

export default ChatMessageBubble;
