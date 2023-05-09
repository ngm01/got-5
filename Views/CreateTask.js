import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTasks, createTask } from '../state/reducers/tasks';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles';

export default function CreateTask() {

    const dispatch = useDispatch();

    const [taskTitle, setTaskTitle] = useState('');
    const [taskTime, setTaskTime] = useState('');

    const [open, setOpen] = useState(false);
    const [taskCadence, setTaskCadence] = useState(1);
    const [items, setItems] = useState([
      {label: 'Daily', value: 1},
      {label: 'Weekly', value: 7},
      {label: 'Every other week', value: 14},
      {label: 'Monthly', value: 30},
      {label: 'Only once', value: 0}
    ]);

     async function createNewTask () {
        const parsedTime = parseInt(taskTime);
        if(parsedTime > 60 || parsedTime === NaN || parsedTime === 0) {
            Alert.alert("Please enter a time, in minutes, between 1 and 60.")
        } else {
            const today = new Date();
            const id = uuidv4();
            const newTask = {
                id: id,
                title: taskTitle,
                time: taskTime,
                cadence: taskCadence,
                created: today,
                lastPerformed: null,
                tags: []
            }
            try {
                await dispatch(createTask(newTask));
                dispatch(getTasks());
            } catch (e) {
                console.log("error creating task:", e);
                Alert.alert("Sorry! \n We encoutered an error attempting to create this task!")
            }
            Alert.alert(`created task:\n${taskTitle}`);
        }
    }

    return (
        <View style={styles.taskInputComponent}>
            <View style={styles.taskInputContainer}>
                <Text style={styles.text}>What do you want to call this task?</Text>
                <TextInput         
                style={styles.taskInput}
                onChangeText={setTaskTitle}
                value={taskTitle}
                placeholder="Example: pushups for 1 minute"
                placeholderTextColor="rgba(255, 255, 255, .25)"
                />
                <Text style={styles.text}>How many minutes will this task take?</Text>
                <TextInput             
                    style={styles.taskInput}
                    onChangeText={setTaskTime} 
                    returnKeyType='done'
                    placeholder='1'
                    placeholderTextColor="rgba(255, 255, 255, .25)"
                    keyboardType="numeric" />
                
                <Text style={styles.text}>How frequently should this task be performed? 
                    <Pressable><Text>ℹ️</Text></Pressable>
                </Text>
                <View style={styles.createTaskDropdownContainer}>
                <DropDownPicker
                    open={open}
                    value={taskCadence}
                    items={items}
                    setOpen={setOpen}
                    setValue={setTaskCadence}
                    setItems={setItems}
                    style={styles.createTaskDropdown}
                    containerStyle={{width: 250}}
                />
                </View>
                {
                    open ? <></> :                 
                    <Pressable 
                        onPress={createNewTask}
                        style={styles.basicButton}>
                        <Text>Create Task</Text>
                    </Pressable>
                }
            </View>
        </View>

    )
}