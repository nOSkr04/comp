import { useState, useEffect, useRef, useCallback } from "react";
import {
  Text,
  View,
  Button,
  Platform,
  Linking,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import { useForm, Controller } from "react-hook-form";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Can use this function below or use Expo's Push Notification Tool from: https://expo.dev/notifications
async function sendPushNotification(expoPushToken: string, data: any) {
  const message = {
    to: expoPushToken,
    title: data.title,
    body: data.body,
    data: { someData: data.data },
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

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.expoConfig?.extra?.eas.projectId,
    });
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }
}

export default function App() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setError,
  } = useForm();

  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    registerForPushNotificationsAsync();
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url;
        Linking.openURL(url);
      }
    );
    return () => subscription.remove();
  }, []);

  const onPress = useCallback(async () => {
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    alert(token);
    setExpoPushToken(token);
  }, []);

  const onSubmit = useCallback(async (data: any) => {
    await sendPushNotification(expoPushToken, data);
  }, []);

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}
    >
      <Text>OTA UPDATE HARIY</Text>
      <Text>{Constants.expoConfig?.version} Version</Text>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={{ borderWidth: 1, width: 350 }}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="body"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={{ borderWidth: 1, width: 350 }}
            value={value}
          />
        )}
      />
      <Controller
        control={control}
        name="data"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            style={{ borderWidth: 1, width: 350 }}
            value={value}
          />
        )}
      />
      <Button
        title="Press to Send Notification"
        onPress={handleSubmit(onSubmit)}
      />

      <Text>Your expo push token: {expoPushToken}</Text>
      <Button title="getToken" onPress={onPress} />
    </View>
  );
}
