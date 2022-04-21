import React from "react";
import { View, Button } from "react-native";
import * as Notifications from "expo-notifications";

export default function PushNotification({ pushToken }) {
  const triggerNotificationHandler = () => {
    console.log(pushToken);
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-Encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: pushToken,
        data: { extradata: "Some data" },
        title: "Sent via App",
        body: "This Notif is sent via App",
      }),
    });
  };

  return (
    <View>
      <Button title="Push Notification" onPress={triggerNotificationHandler} />
    </View>
  );
}
