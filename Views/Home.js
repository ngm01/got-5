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

    const toggleIsTimerRunning = () => {
        setIsTimerRunning(current => !current)
    }

    const handleComplete = () => {
        setTaskToDo(current => {return {...current, lastPerformed: new Date()}})
        dispatch(updateTask(taskToDo));
        dispatch(getTasks());
        setTaskToDo(null);
        toggleIsTimerRunning();
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
                {({ remainingTime }) => <Text style={styles.text}>{remainingTime}</Text>}
            </CountdownCircleTimer>
            <Text style={styles.text}>{taskToDo ? taskToDo.title : ''}</Text>
            <Button 
                onPress={toggleIsTimerRunning}
                title={isTimerRunning ? "STOP" : "START"}
                color="#fb4d3d"
                accessibilityLabel="Timer Start/Stop Button"
            />
            <TaskButtons />
        </View>
    )
}