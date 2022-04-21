import React from "react";
import { View, Button } from "react-native";
import * as Notifications from "expo-notifications";

export default function LocalNotification() {
  const triggerNotificationHandler = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "My First Notification",
        body: "This is my first notification",
      },
      trigger: {
        seconds: 5,
      },
    });
  };

  return (
    <View>
      <Button title="Local Notification" onPress={triggerNotificationHandler} />
    </View>
  );
}
