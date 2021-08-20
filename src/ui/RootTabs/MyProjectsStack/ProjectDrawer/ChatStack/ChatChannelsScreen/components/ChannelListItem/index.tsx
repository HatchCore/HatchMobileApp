import React from "react";

import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Text } from "react-native-elements";

import { MARGIN, PADDING } from "src/styles/common/spacing";
import { FONT_SIZE, FONT_WEIGHT } from "src/styles/common/typography";

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: "white",
    padding: PADDING.S,
    marginBottom: MARGIN.XS,
  },
  name: {
    ...FONT_SIZE.P,
  } as TextStyle,
  active: {
    ...FONT_WEIGHT.BOLD,
  } as TextStyle,
});

interface ChannelListItemProps {
  style?: ViewStyle;
  name: string;
  active?: boolean;
  handleGoToChatChannel: () => void;
}

const ChannelListItem: React.FunctionComponent<ChannelListItemProps> = (
  props: ChannelListItemProps
) => {
  const { style, name, active, handleGoToChatChannel } = props;

  return (
    <TouchableOpacity
      style={[style, styles.listItem]}
      onPress={handleGoToChatChannel}
    >
      <Text style={[active && styles.active, styles.name]}>{name}</Text>
    </TouchableOpacity>
  );
};

ChannelListItem.defaultProps = {
  style: undefined,
  active: false,
};

export default ChannelListItem;
