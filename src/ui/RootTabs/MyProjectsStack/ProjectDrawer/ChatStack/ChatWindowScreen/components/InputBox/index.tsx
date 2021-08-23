import React from "react";

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { v4 as uuidv4 } from "uuid";

import { createChatMessage } from "src/api/client/project";
import { User } from "src/api/types/APISchema";
import AutoExpandingTextInput from "src/components/AutoExpandingTextInput";
import { MARGIN, PADDING } from "src/styles/common/spacing";
import { BRAND, COLORS, THEME } from "src/styles/common/theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: PADDING.XS,
    height: "100%",
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
    flex: 9,
    // flexGrow: 1,
    backgroundColor: COLORS.BORDER_GRAY,
    // height: 70,
    height: "100%",
    marginRight: MARGIN.S,
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
  user: User | null;
  value: string;
  onChangeText: (text: string) => void;
  sendMessage: (message: string) => void;
}

const InputBox: React.FunctionComponent<InputBoxProps> = (
  props: InputBoxProps
) => {
  const { style, user, value, onChangeText, sendMessage } = props;

  return (
    <View style={[style, styles.container]}>
      <View style={styles.rowContainer}>
        {/* <View style={styles.inputContainer}>
          <TextInput multiline onChangeText={onChangeText} value={value} />
        </View> */}
        <TextInput
          style={styles.inputContainer}
          multiline
          value={value}
          onChangeText={onChangeText}
        />
        {/* <AutoExpandingTextInput
          style={styles.inputContainer}
          // multiline
          onChangeText={onChangeText}
          value={value}
        /> */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => sendMessage(value)}
          >
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
