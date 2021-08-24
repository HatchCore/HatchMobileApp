import React from "react";

import { useHeaderHeight } from "@react-navigation/elements";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

// import { PADDING } from "src/styles/common/spacing";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  inner: {
    // padding: PADDING.M,
    flex: 1,
    justifyContent: "flex-end",
  },
});

interface KeyboardAvoidingComponentProps {
  children: React.ReactElement | React.ReactElement[];
}

const KeyboardAvoidingComponent: React.FunctionComponent<KeyboardAvoidingComponentProps> =
  (props: KeyboardAvoidingComponentProps) => {
    const { children } = props;
    const headerHeight = useHeaderHeight();

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={
          headerHeight * 2
          // headerHeight * 2 +
          // (StatusBar.currentHeight ? StatusBar.currentHeight : 20)
        }
        style={styles.container}
        enabled
      >
        <SafeAreaView style={styles.container}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
              {children}
              {/* <View style={styles.container} /> */}
            </View>
          </TouchableWithoutFeedback>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  };

export default KeyboardAvoidingComponent;
