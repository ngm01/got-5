import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false
    })
  });

export const schedulePushNotification = async (time) => {
    await Notifications.scheduleNotificationAsync({
        identifier: 'task_complete',
        content: {
            title: 'Task complete!'
        },
        trigger: {
            seconds: time || 1
        }
    })
}

export const cancelPushNotification = async (identifier) => {
    await Notifications.cancelScheduledNotificationAsync(identifier)
}