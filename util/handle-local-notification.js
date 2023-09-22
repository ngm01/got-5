import * as Notifications from 'expo-notifications';

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

export const scheduleLocalNotification = async (time = 1, taskTitle) => {
    console.log("Scheduling notification...", time, taskTitle)
    Notifications.scheduleNotificationAsync({
        identifier: 'task_complete',
        content: {
            title: 'Got 5?',
            body: `Timer for task '${taskTitle}' has finished`,
            sound: 'default'
        },
        trigger: {
            seconds: time
        }
    })
}

export const cancelLocalNotification = async (identifier) => {
    Notifications.cancelScheduledNotificationAsync(identifier)
}

export const getScheduled = async () => {
    const list = await Notifications.getAllScheduledNotificationsAsync();
    console.log("Scheduled notifications:", list)
}