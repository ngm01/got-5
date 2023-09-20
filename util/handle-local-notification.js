import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true
    })
  });

export const requestPermissionsAsync = async () => {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
}

export const getTokenAsync = async () => {
  let response = await Notifications.getExpoPushTokenAsync();
  console.log("got permissions:", response)
}

export const getPermissions = async () => {
  try {
    await requestPermissionsAsync();
    await getTokenAsync();
  } catch (e) {
    console.error("ERROR GETTING PERMISSIONS:", e)
  }
}

export const schedulePushNotification = async (time = 1) => {
    console.log("Scheduling notification...", time)
    Notifications.scheduleNotificationAsync({
        identifier: 'task_complete',
        content: {
            title: 'Got 5',
            body: "Finished!",
            sound: '352661__foolboymedia__complete-chime.mp3'
        },
        trigger: {
            seconds: time
        }
    })
}

export const cancelPushNotification = async (identifier) => {
    Notifications.cancelScheduledNotificationAsync(identifier)
}

export const getScheduled = async () => {
    const list = await Notifications.getAllScheduledNotificationsAsync();
    console.log("Scheduled notifications:", list)
}