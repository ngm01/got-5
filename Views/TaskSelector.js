import { StyleSheet, Text, View, Pressable, Alert, TextInput } from 'react-native';
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
            Alert.alert(`You don't have any tasks that can be done in ${taskTime} minutes or less`)
        } else {
            const selectedTask = tasksInTime[Math.floor(Math.random() * tasksInTime.length)]
            Alert.alert(selectedTask.title)
            //setTaskToDo(selectedTask);
        }
    }    

    return ( 
        <View>
            <Text>How much time do you have?</Text>
            <View>
            <TextInput 
                onChangeText={setTaskTime} 
                keyboardType="numeric"
                returnKeyType='done'
                value={taskTime}
            />
            <Text>minutes</Text>
            </View>
            <Pressable onPress={handlePress}>
                <Text>Get a Task</Text>
            </Pressable>
        </View>
     );
}

export default TaskSelector;