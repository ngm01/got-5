import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true
    })
  });

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