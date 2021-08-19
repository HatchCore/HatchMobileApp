import React from "react";

import { StyleSheet, TextStyle, View } from "react-native";
import { Text } from "react-native-elements";

import { PADDING } from "src/styles/common/spacing";
import { FONT_SIZE, FONT_WEIGHT } from "src/styles/common/typography";
import { CONTAINER } from "src/styles/layout/container";

const styles = StyleSheet.create({
  page: {
    ...CONTAINER.PAGE,
  },
  sectionHeader: {
    ...FONT_SIZE.H3,
    ...FONT_WEIGHT.BOLD,
  } as TextStyle,
  section: {
    paddingBottom: PADDING.S,
  },
  channelListItem: {},
});

const ChatScreen = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.sectionHeader}>Public Channels</Text>
      <Text style={styles.sectionHeader}>Private Channels</Text>
      <Text style={styles.sectionHeader}>Direct Messages</Text>
    </View>
  );
};

export default ChatScreen;
