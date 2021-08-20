import React from "react";

import { StyleSheet, View, ViewStyle } from "react-native";
import { Text } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

interface MessageContainerProps {
  style?: ViewStyle;
}

const MessageContainer: React.FunctionComponent<MessageContainerProps> = (
  props: MessageContainerProps
) => {
  const { style } = props;
  return (
    <View style={[style, styles.container]}>
      <Text>Messages</Text>
    </View>
  );
};

MessageContainer.defaultProps = {
  style: undefined,
};

export default MessageContainer;
