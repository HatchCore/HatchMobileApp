import React, { useEffect, useRef, useState } from "react";

import * as Notifications from "expo-notifications";
import { Notification } from "expo-notifications";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, View, Button } from "react-native";

import { PushNotificationUtils } from "../../../utils/PushNotificationUtils";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const PushNotificationsScreen = () => {
  const [expoPushToken, setExpoPushToken] = useState<string | undefined>("");
  const [notification, setNotification] = useState<Notification>();
  const notificationListener = useRef<any>();
  const responseListener = useRef<any>();

  useEffect(() => {
    PushNotificationUtils.registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notificationReceived) => {
        setNotification(notificationReceived);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await PushNotificationUtils.sendPushNotification(
            expoPushToken,
            "Hello World",
            "Sup"
          );
        }}
      />
    </SafeAreaView>
  );
};

export default PushNotificationsScreen;
