import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getTasks, updateTask } from '../state/reducers/tasks';
import { Pressable, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Audio } from 'expo-av';
import TaskContext from '../state/TaskContext';
import { useNavigation } from '@react-navigation/native';
import basicStyles from '../styles/basicStyles';
import timerStyles from '../styles/timerStyles';

export default function Timer() {

    const dispatch = useDispatch();
    const navigation = useNavigation()

    const [currentTask, setCurrentTask] = useContext(TaskContext)

    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [sound, setSound] = useState();

    const playSound = async () => {
        const { sound } = await Audio.Sound.createAsync( require('../assets/352661__foolboymedia__complete-chime.mp3') )
        setSound(sound);
        await sound.playAsync();
    }

    useEffect(() => {
        return sound ?
        () => {
            sound.unloadAsync();
        } : undefined
    }, [sound])

    useEffect(() => {
        setIsTimerRunning(true);
        playSound();
    }, [])

    const formatCountdownTime = (remainingTime) => {

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
        playSound();
        navigation.navigate('Home')
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
                style={timerStyles.timerButton}>
                    <Text style={basicStyles.largeText}>{isTimerRunning ? "PAUSE" : "RESUME"}</Text>
            </Pressable>
            <Pressable 
                onPress={handleCancel}
                style={timerStyles.timerButton}>
                    <Text style={basicStyles.largeText}>CANCEL</Text>
            </Pressable>
        </View>
    </View>
}