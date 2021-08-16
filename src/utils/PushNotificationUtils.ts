import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { Platform } from "react-native";

export namespace PushNotificationUtils {
  // Can use this function below, OR use Expo's Push Notification Tool-> https://expo.dev/notifications
  export async function sendPushNotification(
    expoPushToken: string | undefined,
    title: string | undefined,
    body: string | undefined,
    data: object = {},
    sound: string = "default"
  ) {
    const message = {
      to: expoPushToken,
      sound,
      title,
      body,
      data,
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
  }

  export const registerForPushNotificationsAsync = async (): Promise<
    string | undefined
  > => {
    let token;
    if (Constants.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        console.warn("", "Failed to get push token for push notification!");
        return undefined;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log(token);
    } else {
      console.warn("Must use physical device for Push Notifications");
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  };
}
