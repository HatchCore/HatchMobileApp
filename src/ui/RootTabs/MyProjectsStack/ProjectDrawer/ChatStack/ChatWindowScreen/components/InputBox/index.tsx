import React from "react";

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Button, Icon } from "react-native-elements";

import AutoExpandingTextInput from "src/components/AutoExpandingTextInput";
import { MARGIN, PADDING } from "src/styles/common/spacing";
import { BRAND, COLORS, THEME } from "src/styles/common/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: PADDING.S,
    // height: 100,
    // flex: 0,
    justifyContent: "flex-end",
    // alignItems: "stretch",
    // alignContent: "center",
    // height: "auto",
    // flexDirection: "column",
  },
  rowContainer: {
    flex: 0,
    width: "100%",
    // justifyContent: "flex-start",
    flexDirection: "row",
    height: "auto",
    // alignItems: "stretch",
  },
  inputContainer: {
    // flexGrow: 1,
    backgroundColor: COLORS.BORDER_GRAY,
    // height: 70,
    height: "100%",
    marginRight: MARGIN.S,
    flex: 9,
    borderRadius: THEME.BORDER_RADIUS,
    padding: PADDING.S,
    maxHeight: 100,
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
  },
  button: {
    height: "100%",
    backgroundColor: BRAND.COLORS.PRIMARY,
    justifyContent: "center",
    borderRadius: THEME.BORDER_RADIUS,
  },
});

interface InputBoxProps {
  style?: ViewStyle;
  onChangeText: (text: string) => void;
  value: string;
}

const InputBox: React.FunctionComponent<InputBoxProps> = (
  props: InputBoxProps
) => {
  const { style, value, onChangeText } = props;
  return (
    <View style={[style, styles.container]}>
      <View style={styles.rowContainer}>
        {/* <View style={styles.inputContainer}>
          <TextInput multiline onChangeText={onChangeText} value={value} />
        </View> */}
        {/* <TextInput
          style={styles.inputContainer}
          multiline
          onChangeText={onChangeText}
          value={value}
        /> */}
        <AutoExpandingTextInput
          style={styles.inputContainer}
          // multiline
          onChangeText={onChangeText}
          value={value}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Icon name="send" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

InputBox.defaultProps = {
  style: undefined,
};

export default InputBox;
