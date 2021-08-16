import React, { useEffect, useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

const MyProjects = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>My Projects</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default MyProjects;
