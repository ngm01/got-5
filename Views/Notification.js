import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import { useEffect, useRef, useState } from "react";
import { Button, Platform, Text, View } from "react-native";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
    })
})

export default function Notification() {

    //const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    // useEffect(() => {
    //     //registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    //     notificationListener.current = Notifications.addNotificationReceivedListener(noti => {
    //         setNotification(noti);
    //     });

    //     responseListener.current = Notifications.addNotificationResponseReceivedListener(res => {
    //         console.log(res)
    //     });

    //     return () => {
    //         Notifications.removeNotificationSubscription(notificationListener.current);
    //         Notifications.removeNotificationSubscription(responseListener.current);
    //     }
    // }, [])

    return ( 
        <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Button
          title="Press to schedule a notification"
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View>
     );
}

async function schedulePushNotification() {
    console.log("scheduling notification...")
    await Notifications.scheduleNotificationAsync({
        content: {
            title: "You've got mail!",
            body: "This is the message",
            data: {data: "it's some data"}
        },
        trigger: {seconds: 2}
    })
}

async function registerForPushNotificationsAsync() {
    let token;

    if(Platform.OS === 'android') {
        await Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        })
    }

    if(Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if(existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            console.log("Failed to get push token for push notification!");
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log("token:", token);
    } else {
        console.log("Must use physical device for push notifications")
    }

    return token;
}