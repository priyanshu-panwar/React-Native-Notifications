import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import * as Notifications from "expo-notifications";
import LocalNotification from "./LocalNotification";
import PushNotification from "./PushNotification";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  const [pushToken, setPushToken] = useState();

  // Getting Token
  useEffect(() => {
    Notifications.getExpoPushTokenAsync().then((data) => {
      setPushToken(data.data);
    });
  }, []);

  useEffect(() => {
    const backgroundSubscription =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    const foregroundSubscription =
      Notifications.addNotificationReceivedListener((notification) => {
        console.log(notification);
      });

    // unmount
    return () => {
      backgroundSubscription.remove();
      foregroundSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ margin: 20 }}>
        <PushNotification pushToken={pushToken} />
      </View>
      <View style={{ margin: 20 }}>
        <LocalNotification />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
