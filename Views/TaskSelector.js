import { StyleSheet, Text, View, Pressable, Alert, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, getTasks } from '../state/reducers/tasks';

function TaskSelector({ setTaskToDo }) {

    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);

    useEffect(() => {
        dispatch(getTasks());
    }, [])

    const [taskTime, setTaskTime] = useState(5)

    const handlePress = () => {
        const tasksInTime = tasks.filter(task => task.time <= taskTime);
        if(tasksInTime.length === 0) {
            const minutes = taskTime == 1 ? 'minute' : 'minutes'
            Alert.alert(`You haven't created any tasks that can be done in ${taskTime} ${minutes} or less`)
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
            const cadenceCheck = new Date(
                task.lastPerformed.getFullYear(),
                task.lastPerformed.getMonth(),
                task.lastPerformed.getDate() + task.cadence.value
            )
            const today = new Date();
            return today > cadenceCheck;
        }
    }

    return ( 
        <View>
            <Text style={styles.text}>How much time do you have?</Text>
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    onChangeText={setTaskTime} 
                    keyboardType="numeric"
                    returnKeyType='done'
                    value={taskTime}
                />
                <Text style={styles.text}>minutes</Text>
            </View>
            <Button title="GET A TASK" color="#fb4d3d" onPress={handlePress} />
        </View>
     );
}

const styles = StyleSheet.create({
    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 80,
        borderColor: 'gray',
        backgroundColor: '#fff'
      },
      text: {
        color: '#fff'
      }
})

export default TaskSelector;