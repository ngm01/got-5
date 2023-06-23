import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks, updateTask } from '../state/reducers/tasks';
import { Pressable, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { TaskContext } from '../App';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

export default function Timer() {

    const dispatch = useDispatch();

    const [currentTask, setCurrentTask] = useContext(TaskContext)

    const [isTimerRunning, setIsTimerRunning] = useState(false);

    useEffect(() => {
        setIsTimerRunning(true);
    }, [])

    const formatTime = (remainingTime) => {
        const minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        seconds = seconds === 0 ? '00' : seconds;
      
        return `${minutes}:${seconds}`
    }

    const handleComplete = () => {
        const updatedTask = {...currentTask, lastPerformed: new Date()}
        dispatch(updateTask(updatedTask));
        dispatch(getTasks());
        setCurrentTask(null);
        useNavigation('Home')
    }

    return <View>
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
            onPress={() => {useNavigation('Home')}}
            style={styles.basicButton}>
            <Text style={styles.text}>CANCEL</Text>
        </Pressable>
        {/* <Text style={styles.text}>Testing 123</Text> */}
    </View>
}