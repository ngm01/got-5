import { StyleSheet, Text, View, Pressable, Alert, TextInput, Button } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, getTasks } from '../state/reducers/tasks';
import TaskContext from '../state/TaskContext';
import styles from '../styles';
import { useNavigation } from '@react-navigation/native';

function TaskSelector() {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const tasks = useSelector(selectAllTasks);
    const [currentTask, setCurrentTask] = useContext(TaskContext);

    useEffect(() => {
        dispatch(getTasks());
    }, [])

    const [taskTime, setTaskTime] = useState(0);

    const handlePress = () => {
        if(taskTime === 0 || taskTime === null || taskTime > 60) {
            Alert.alert("Please enter a time in minutes between 1 and 60.");
            return;
        }
        const tasksInTime = tasks.filter(task => task.time <= taskTime);
        if(tasksInTime.length === 0) {
            const minutes = taskTime == 1 ? 'minute' : 'minutes'
            Alert.alert(`You haven't created any tasks that can be done in ${taskTime} ${minutes} or less.`)
        } else {
            const availableTasks = tasksInTime.filter(checkCanPerform)
            if(availableTasks.length) {
                const selectedTask = availableTasks[Math.floor(Math.random() * availableTasks.length)]
                setCurrentTask(selectedTask);
            } else {
                Alert.alert("Looks like you have no tasks to perform! Enjoy some well earned rest!")
            }
        }
    }
    
    const checkCanPerform = (task) => {
        if(task.lastPerformed === null) {
            return true;
        } else {
            const lastPerformed = new Date(task.lastPerformed);
            const cadenceCheck = new Date(
                lastPerformed.getFullYear(),
                lastPerformed.getMonth(),
                lastPerformed.getDate() + task.cadence
            )
            const today = new Date();
            return today > cadenceCheck;
        }
    }

    return ( 
        <View style={styles.taskSelectorContainer}>
            <Text style={styles.bigText}>How much time do you have?</Text>
            <View style={styles.timeInputContainer}>
                <TextInput 
                    style={styles.timeInput}
                    onChangeText={setTaskTime} 
                    keyboardType="numeric"
                    returnKeyType='done'
                    value={taskTime}
                />
                <Text style={styles.bigText}>minutes</Text>
            </View>
            <Pressable 
                onPress={handlePress}
                style={styles.basicButton}>
                <Text style={styles.bigText}>{currentTask ? 'Get Another Task' : 'Get a Task'}</Text>
            </Pressable>
            <Text style={styles.bigText}>{currentTask ? currentTask.title : 'TODO: Visualizer...'}</Text>
            <Pressable 
                onPress={() => {navigation.navigate('Timer')}}
                disabled={!currentTask}
                style={currentTask ? styles.basicButton: styles.basicButtonDisabled}>
                <Text style={styles.bigText}>START</Text>
            </Pressable>
        </View>
     );
}

export default TaskSelector;