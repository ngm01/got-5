import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, updateTask } from '../state/reducers/tasks';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import TaskButtons from './TaskButtons';
import TaskSelector from './TaskSelector';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import styles from '../styles';

export default function Home() {

    const dispatch = useDispatch();

    [taskToDo, setTaskToDo] = useState(null);
    [isTimerRunning, setIsTimerRunning] = useState(false);

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

    return (
        <View style={styles.homeContainer}>
            <TaskSelector setTaskToDo={setTaskToDo} />
            <CountdownCircleTimer
                isPlaying={isTimerRunning}
                duration={taskToDo ? taskToDo.time * 60 : 0}
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}
                onComplete={handleComplete}
            >
                {({ remainingTime }) => 
                <Text style={styles.text}>{taskToDo ? taskToDo.title : ''} {remainingTime < 0 ? 0 : remainingTime}</Text>
                }
            </CountdownCircleTimer>
            <Button 
                onPress={handleTimerStart}
                title={isTimerRunning ? "STOP" : "START"}
                color="#fb4d3d"
                accessibilityLabel="Timer Start/Stop Button"
            />
            <TaskButtons />
        </View>
    )
}