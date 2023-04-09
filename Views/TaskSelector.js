import { StyleSheet, Text, View, Pressable, Alert, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, getTasks } from '../state/reducers/tasks';
import styles from '../styles';

function TaskSelector({ setTaskToDo }) {

    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [])

    const [taskTime, setTaskTime] = useState(0)

    const handlePress = () => {
        if(taskTime === 0 || taskTime === null) {
            Alert.alert("Please enter a time.");
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
                setTaskToDo(selectedTask);
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
        <View>
            <Text style={styles.text}>How much time do you have?</Text>
            <View style={styles.timeInputContainer}>
                <TextInput 
                    style={styles.timeInput}
                    onChangeText={setTaskTime} 
                    keyboardType="numeric"
                    returnKeyType='done'
                    value={taskTime}
                />
                <Text style={styles.text}>minutes</Text>
            </View>
            <Pressable 
                onPress={handlePress}
                style={styles.basicButton}>
                <Text>Get a Task</Text>
            </Pressable>
        </View>
     );
}

export default TaskSelector;