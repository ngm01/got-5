import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import { useEffect, useRef } from 'react';

const BACKGROUND_TIMER = "background-timer";

// 1. Define the task by providing a name and the function that should be executed
// Note: This needs to be called in the global scope (e.g outside of your React components)
// here we're using the task manager API...
TaskManager.defineTask(BACKGROUND_TIMER,  async () => {
    
    // so what actually needs to happen here?
    console.log("This is where we run the background timer...");

    // ...and here we're using the BackgroundFetch API
    return BackgroundFetch.BackgroundFetchResult.NewData;
})

// 2. Register the task at some point in your app by providing the same name,
// and some configuration options for how the background fetch should behave
// Note: This does NOT need to be in the global scope and CAN be used in your React components!
// So: move this to the timer component....
async function registerBackgroundFetchAsync() {
    return BackgroundFetch.registerTaskAsync(BACKGROUND_TIMER, {
        // minimum interval seems key, what does this do?
        minimumInterval: 0,
        stopOnTerminate: false, //android only
        startOnBoot: false //android only
    })
}

// 3. (Optional) Unregister tasks by specifying the task name
// This will cancel any future background fetch calls that match the given name
// Note: This does NOT need to be in the global scope and CAN be used in your React components!
// So we should call this when the app is no longer backgrounded?
async function unregisterBackgroundFetchTask() {
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_TIMER);
}