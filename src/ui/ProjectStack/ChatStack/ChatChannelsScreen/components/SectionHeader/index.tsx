import React from "react";

import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { Text } from "react-native-elements";

import { FONT_SIZE, FONT_WEIGHT } from "src/styles/common/typography";

const styles = StyleSheet.create({
  sectionHeader: {
    ...FONT_SIZE.H3,
    ...FONT_WEIGHT.BOLD,
  } as TextStyle,
});

interface SectionHeaderProps {
  style?: ViewStyle;
  name: string;
}

const SectionHeader: React.FunctionComponent<SectionHeaderProps> = (
  props: SectionHeaderProps
) => {
  const { style, name } = props;

  return <Text style={[style, styles.sectionHeader]}>{name}</Text>;
};

SectionHeader.defaultProps = {
  style: undefined,
};

export default SectionHeader;
