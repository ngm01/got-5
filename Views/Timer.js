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

        const formatSeconds = (sec) => {
            if (sec === 0) return '00';
            if (sec <= 9) return '0' + sec;
            return sec;
        }

        const minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        seconds = formatSeconds(seconds);
      
        return `${minutes}:${seconds}`

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

    return <View style={styles.timerContainer}>
        <Text style={styles.bigText}>{currentTask.title}</Text>
        <CountdownCircleTimer
                isPlaying={isTimerRunning}
                duration={currentTask ? currentTask.time * 60 : 0}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={handleComplete}
                size={300}
            >
                {({ remainingTime }) => 
                <Text style={styles.timerText}>{remainingTime < 0 ? '' : formatTime(remainingTime)}</Text>
                }
        </CountdownCircleTimer>
        <View style={styles.timerButtonsContainer}>
            <Pressable 
                onPress={() => {setIsTimerRunning(!isTimerRunning)}}
                style={styles.basicButton}>
                    <Text style={styles.bigText}>{isTimerRunning ? "PAUSE" : "RESUME"}</Text>
            </Pressable>
            <Pressable 
                onPress={handleCancel}
                style={styles.basicButton}>
                    <Text style={styles.bigText}>CANCEL</Text>
            </Pressable>
        </View>
    </View>
}