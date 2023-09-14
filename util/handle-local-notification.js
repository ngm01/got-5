import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true
    })
  });

export const schedulePushNotification = async (time) => {
    console.log("Scheduling notification...")
    return await Notifications.scheduleNotificationAsync({
        identifier: 'task_complete',
        content: {
            title: 'Got 5',
            body: "Finished!",
            sound: '352661__foolboymedia__complete-chime.mp3'
        },
        trigger: {
            seconds: time || 1
        }
    })
}

export const cancelPushNotification = async (identifier) => {
    await Notifications.cancelScheduledNotificationAsync(identifier)
}