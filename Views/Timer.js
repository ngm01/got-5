import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks, updateTask } from '../state/reducers/tasks';
import { AppState, Pressable, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useSound } from '../hooks/useSound';
import soundPaths from '../assets/soundPaths';
import TaskContext from '../state/TaskContext';
import BackgroundTimeoutContext from '../state/BackgroundTimeoutContext';
import * as BackgroundFetch from 'expo-background-fetch';
import { useNavigation } from '@react-navigation/native';
import basicStyles from '../styles/basicStyles';
import timerStyles from '../styles/timerStyles';
import { BACKGROUND_TIMEOUT } from '../backgroundTasks/backgroundTimeout';
import { useLocalNotification } from "../hooks/useLocalNotifcation"
import * as Notifications from "expo-notifications";
import { schedulePushNotification } from "../util/handle-local-notification";

export default function Timer() {

    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false
      })
    });

    useLocalNotification();
    const handleLocalPushNotification = async () => {
      await schedulePushNotification()
    }

    const dispatch = useDispatch();
    const navigation = useNavigation()

    const appState = useRef(null);
    const timeAtAppBackground = useRef(null);

    const [currentTask, setCurrentTask] = useContext(TaskContext)
    const [backgroundTimeout, setBackgroundTimeout] = useContext(BackgroundTimeoutContext);

    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [playSound] = useSound(soundPaths.chime)

    async function registerBackgroundFetchAsync() {
      console.log("registering background task")
      return BackgroundFetch.registerTaskAsync(BACKGROUND_TIMEOUT, {
          minimumInterval: 10,
          stopOnTerminate: false, //android only
          startOnBoot: false //android only
      })
    }

    async function unregisterBackgroundFetchTask() {
      console.log("unregistering background task")
      return BackgroundFetch.unregisterTaskAsync(BACKGROUND_TIMEOUT);
  }


    useEffect(() => {
      const subscription = AppState.addEventListener('change', nextAppState => {
        if (
          appState.current.match(/active/) &&
          (nextAppState === 'inactive' || nextAppState === 'background')
        ) {
          console.log('App is in background');
          handleLocalPushNotification()
          timeAtAppBackground.current = new Date();

        }

        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === 'active'
        ) {
          console.log('App has come to the foreground!');
        }

        appState.current = nextAppState;
      });

      return () => {
        subscription.remove();
      };
    }, []);

    useEffect(() => {
        appState.current = AppState.currentState;
        setIsTimerRunning(true);
        playSound();
    }, [])

    const formatCountdownTime = (remainingTime) => {

        if(timeAtAppBackground.current !== null) {
            const backgroundTime = timeAtAppBackground.current.getTime();
            const rightNow = new Date().getTime();
            const timeDiff = Math.floor((rightNow - backgroundTime) / 1000);
            remainingTime = remainingTime - timeDiff;
            timeAtAppBackground.current = null;
        }

        const formatUnits = (unit) => {
            if (unit === 0) return '00';
            if (unit <= 9) return '0' + unit;
            return unit;
        }

        let minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        minutes = formatUnits(minutes);
        seconds = formatUnits(seconds);
      
        return `${minutes}:${seconds}`

    }

    const handleComplete = () => {
        try {
            const updatedTask = {...currentTask, lastPerformed: new Date(), timesPerformed: currentTask.timesPerformed ? ++currentTask.timesPerformed : 1}
            dispatch(updateTask(updatedTask));
            dispatch(getTasks());
            playSound();
            //setCurrentTask(null);
            navigation.navigate('FinishedModal');
        } catch (e) {
            console.log("Error in Timer handleComplete:", e)
        }
    }

    const handleCancel = () => {
        setIsTimerRunning(false);
        setCurrentTask(null);
        navigation.navigate('Home')
    }

    return <View style={timerStyles.timerContainer}>
        <Text style={timerStyles.timerTaskText}>{currentTask.title}</Text>
        <CountdownCircleTimer
                isPlaying={isTimerRunning}
                duration={currentTask ? currentTask.time * 60 : 0}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={handleComplete}
                size={300}
            >
                {({ remainingTime }) => 
                <Text style={timerStyles.timerText}>{remainingTime < 0 ? '' : formatCountdownTime(remainingTime)}</Text>
                }
        </CountdownCircleTimer>
        <View style={timerStyles.timerButtonsContainer}>
            <Pressable 
                onPress={() => {setIsTimerRunning(!isTimerRunning)}}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                    <Text style={basicStyles.textLargeBlack}>{isTimerRunning ? "PAUSE" : "RESUME"}</Text>
            </Pressable>
            <Pressable 
                onPress={handleCancel}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                    <Text style={basicStyles.textLargeBlack}>CANCEL</Text>
            </Pressable>
        </View>
    </View>
}