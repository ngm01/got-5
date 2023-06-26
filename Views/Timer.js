import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks, updateTask } from '../state/reducers/tasks';
import { Pressable, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import TaskContext from '../state/TaskContext';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

export default function Timer() {

    const dispatch = useDispatch();
    const navigation = useNavigation()

    const [currentTask, setCurrentTask] = useContext(TaskContext)

    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        setIsTimerRunning(true);
    }, [])

    const formatTime = (remainingTime) => {
        const minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        seconds = seconds === 0 ? '00' : seconds;
        let miliseconds = seconds % 60;
        miliseconds = miliseconds === 0 ? '00' : miliseconds;
      
        return `${minutes}:${seconds}:${miliseconds}`
    }

    const handleComplete = () => {
        const updatedTask = {...currentTask, lastPerformed: new Date()}
        dispatch(updateTask(updatedTask));
        dispatch(getTasks());
        setCurrentTask(null);
        navigation.navigate('Home')
    }

    const handleCancel = () => {
        setIsTimerRunning(false);
        setCurrentTask(null);
        navigation.navigate('Home')
    }

    return <View style={styles.homeContainer}>
        <CountdownCircleTimer
                isPlaying={isTimerRunning}
                duration={currentTask ? currentTask.time * 60 : 0}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={handleComplete}
                size={200}
            >
                {({ remainingTime }) => 
                <Text style={styles.timerText}>{currentTask ? currentTask.title : 'Enter a time to get a task!'} {remainingTime < 0 ? '' : formatTime(remainingTime)}</Text>
                }
        </CountdownCircleTimer>
        <Pressable 
                onPress={() => {setIsTimerRunning(!isTimerRunning)}}
                style={styles.basicButton}>
                <Text style={styles.text}>{isTimerRunning ? "PAUSE" : "RESUME"}</Text>
            </Pressable>
        <Pressable 
            onPress={handleCancel}
            style={styles.basicButton}>
            <Text style={styles.text}>CANCEL</Text>
        </Pressable>
    </View>
}