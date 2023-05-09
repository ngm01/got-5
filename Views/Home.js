import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, updateTask } from '../state/reducers/tasks';
import { Alert, Button, Pressable, StyleSheet, Text, View } from 'react-native';
import TaskButtons from './TaskButtons';
import TaskSelector from './TaskSelector';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import styles from '../styles';

export default function Home() {

    const dispatch = useDispatch();

    const [taskToDo, setTaskToDo] = useState(null);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    const handleTimerStart = () => {
        if(taskToDo === null) {
            Alert.alert("Please select a task.")
        } else { 
            setIsTimerRunning(current => !current)
        }
    }

    const handleComplete = () => {
        const updatedTask = {...taskToDo, lastPerformed: new Date()}
        dispatch(updateTask(updatedTask));
        dispatch(getTasks());
        setTaskToDo(null);
        setIsTimerRunning(current => !current)
    }

    const formatTime = (remainingTime) => {
            const minutes = Math.floor(remainingTime / 60)
            let seconds = remainingTime % 60
            seconds = seconds === 0 ? '00' : seconds;
          
            return `${minutes}:${seconds}`
    }

    return (
        <View style={styles.homeContainer}>
            <TaskSelector setTaskToDo={setTaskToDo} />
            <CountdownCircleTimer
                isPlaying={isTimerRunning}
                duration={taskToDo ? taskToDo.time * 60 : 0}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={handleComplete}
                size={200}
            >
                {({ remainingTime }) => 
                <Text style={styles.timerText}>{taskToDo ? taskToDo.title : 'Enter a time to get a task!'} {remainingTime < 0 ? '' : formatTime(remainingTime)}</Text>
                }
            </CountdownCircleTimer>
            <Pressable 
                onPress={handleTimerStart}
                style={styles.basicButton}>
                <Text style={styles.text}>{isTimerRunning ? "STOP" : "START"}</Text>
            </Pressable>
            <TaskButtons />
        </View>
    )
}