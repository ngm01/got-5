import { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks, updateTask } from '../state/reducers/tasks';
import { AppState, Pressable, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useSound } from '../hooks/useSound';
import soundPaths from '../assets/soundPaths';
import TaskContext from '../state/TaskContext';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import basicStyles from '../styles/basicStyles';
import timerStyles from '../styles/timerStyles';
import { scheduleLocalNotification, cancelLocalNotification } from "../util/handle-local-notification";
import { trimTaskTitle } from '../util/util';

export default function Timer() {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const isFocused = useIsFocused();
    
    const [currentTask, setCurrentTask] = useContext(TaskContext)

    const appState = useRef(null);
    const timeRemaining = useRef(null);

    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [restartKey, setRestartKey] = useState(0);
    
    const [playSound] = useSound(soundPaths.chime);

    useEffect(() => {
      if(isFocused) {
        appState.current = AppState.currentState;
        setIsTimerRunning(true);
        playSound('timerStart');
        setRestartKey(current => current + 1)
      }
    }, [isFocused])

    useEffect(() => {
      const subscription = AppState.addEventListener('change', nextAppState => {
        if (appState.current.match(/^active|foreground/)  
        && nextAppState.match(/inactive|background/)) {
          scheduleLocalNotification(timeRemaining.current, currentTask?.title)
        }
        else if (appState.current.match(/inactive|background/)  
        && nextAppState.match(/^active|foreground/)) {
          cancelLocalNotification('task_complete')
        }
        appState.current = nextAppState;
      });

      return () => {
        subscription.remove();
      };
    }, []);

    const formatCountdownTime = (remainingTime) => {

        timeRemaining.current = remainingTime;

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
            playSound('unload');
            cancelLocalNotification('task_complete')
            navigation.navigate('FinishedModal');
        } catch (e) {
            console.error("Error in Timer handleComplete:", e)
            navigation.navigate('FinishedModal');
        }
    }

    const handleCancel = () => {
        setIsTimerRunning(false);
        setCurrentTask(null);
        cancelLocalNotification('task_complete')
        navigation.navigate('Home')
    }

    return <View style={timerStyles.timerContainer}>
        <Text style={timerStyles.timerTaskText}>{trimTaskTitle(currentTask?.title)}</Text>
        <CountdownCircleTimer
                key={restartKey}
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
                    <Text style={basicStyles.textLargeB}>{isTimerRunning ? "PAUSE" : "RESUME"}</Text>
            </Pressable>
            <Pressable 
                onPress={handleCancel}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                    <Text style={basicStyles.textLargeB}>CANCEL</Text>
            </Pressable>
        </View>
    </View>
}