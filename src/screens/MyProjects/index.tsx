import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const MyProjects = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>My Projects</Text>
    </SafeAreaView>
  );
};

export default MyProjects;
