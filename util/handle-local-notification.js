import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

export const schedulePushNotification = async () => {
    await Notifications.scheduleNotificationAsync({
        identifier: 'review',
        content: {
            title: 'Task complete!'
        },
        trigger: {
            seconds: 1
        }
    })
}

export const registerForPushNotificationsAsync = async () => {
    let token = "";

    if(Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FFAABBCC"
          });
    }

    if(Device.isDevice) {
        const {status: existingStatus} = await Notifications.requestPermissionsAsync();
        let finalStatus = existingStatus;

        if(existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }

        if(finalStatus !== 'granted') {
            console.log("FAILED to get push token for push notification");
            return;
        }

        token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
        console.log("Must use physical device for push notifications")
    }

    return token;
}