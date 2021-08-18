import React from "react";

import { StyleSheet, TextStyle } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";

import { PADDING } from "src/styles/common/spacing";
import { BRAND, COLORS, THEME } from "src/styles/common/theme";
import { FONT_SIZE, FONT_WEIGHT } from "src/styles/common/typography";

interface ViewMoreButtonProps {
  title: string;
  onPress: () => void;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.LIGHT_GRAY,
    borderRadius: THEME.BORDER_RADIUS,
    padding: PADDING.XS,
    justifyContent: "center",
  },
  title: {
    color: BRAND.COLORS.DARK,
    ...FONT_WEIGHT.BOLD,
    ...FONT_SIZE.P,
  } as TextStyle,
});

const ViewMoreButton: React.FunctionComponent<ViewMoreButtonProps> = (
  props: ViewMoreButtonProps
) => {
  const { title, onPress } = props;

  return (
    <Button
      title={title}
      style={styles.button}
      titleStyle={styles.title}
      onPress={onPress}
    />
  );
};

export default ViewMoreButton;
