import React, { useState } from "react";

import { useRoute } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  ChatChannel,
  ChatChannelMetadata,
  User,
} from "src/api/types/APISchema";

import InputBox from "./components/InputBox";
import MessageContainer from "./components/MessageContainer";

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  columnContainer: {
    // flex: 1,
    // justifyContent: "space-around",
    height: "100%",
    // alignItems: "stretch",
    flexDirection: "column",
  },
  messageContainer: {
    flex: 1,
    flexGrow: 9,
    // flexShrink: 1,
    // flexBasis: 100,
  },
  inputContainer: {
    flex: 1,
    height: "auto",
    flexGrow: 1,
    alignSelf: "stretch",
    // flexBasis: 42,
  },
});

interface ChatWindowScreenProps {
  user: User | null;
}

const ChatWindowScreen: React.FunctionComponent<ChatWindowScreenProps> = (
  props: ChatWindowScreenProps
) => {
  const { user } = props;

  // const route = useRoute();

  // const [project, setProject] = useState<ChatChannel | null>(null);

  // useEffect(() => {
  //   if (route?.params?.projectId) {
  //     const fetchProject = async () => {
  //       const returnedProject = await getProject(route.params.projectId);
  //       setProject(returnedProject);

  //       console.log("Got project");
  //       console.log(returnedProject);
  //     };
  //     fetchProject();
  //   }
  // }, [route.params]);

  const [messageInput, setMessageInput] = useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.columnContainer}>
        <MessageContainer style={styles.messageContainer} />
        <InputBox
          style={styles.inputContainer}
          onChangeText={setMessageInput}
          value={messageInput}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatWindowScreen;
