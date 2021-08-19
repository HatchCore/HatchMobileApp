import React from "react";

import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
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
}

const ChannelListItem: React.FunctionComponent<ChannelListItemProps> = (
  props: ChannelListItemProps
) => {
  const { style, name, active } = props;

  return (
    <View style={[style, styles.listItem]}>
      <Text style={[active && styles.active, styles.name]}>{name}</Text>
    </View>
  );
};

ChannelListItem.defaultProps = {
  style: undefined,
  active: false,
};

export default ChannelListItem;
