import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTasks, createTask, updateTask } from '../state/reducers/tasks';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles';

export default function TaskForm({action, close, initialTask}) {

    console.log("initialTask:", initialTask)

    const dispatch = useDispatch();

    const [taskTitle, setTaskTitle] = useState(initialTask.title);
    const [taskTime, setTaskTime] = useState(initialTask.time);
    const [taskCadence, setTaskCadence] = useState(initialTask.cadence);

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      {label: 'Daily', value: 1},
      {label: 'Weekly', value: 7},
      {label: 'Every other week', value: 14},
      {label: 'Monthly', value: 30},
      {label: 'Only once', value: 0}
    ]);

    async function performTaskAction () {
        const parsedTime = parseInt(taskTime);
        if( Number.isNaN(parsedTime) || parsedTime === 0 || parsedTime > 60) {
            Alert.alert("Please enter a time, in minutes, between 1 and 60.");
            return;
        } else {
            const today = new Date();
            const id = initialTask ? initialTask.id : uuidv4();
            const thisTask = {
                id: id,
                title: taskTitle,
                time: parsedTime,
                cadence: taskCadence,
                created: initialTask ? initialTask.created : today,
                lastPerformed: initialTask ? initialTask.lastPerformed : null,
                tags: []
            }
            try {
                if(action === 'create') {
                    await dispatch(createTask(thisTask));
                } else if (action === 'update') {
                    await dispatch(updateTask(thisTask))
                }
                dispatch(getTasks());
            } catch (e) {
                console.log(`error ${action}ing task:`, e);
                Alert.alert(`Sorry! \n We encoutered an error attempting to ${action} this task!`)
            }
            Alert.alert(`${action}d task:\n${taskTitle}`);
            setTaskTitle('');
            setTaskTime(null);
            setTaskCadence(1);
            close(false)

        }
    }

    return (
        <View style={styles.createTaskForm}>
            <Text style={styles.text}>What do you want to call this task?</Text>
            <TextInput         
            style={styles.taskInput}
            onChangeText={setTaskTitle}
            returnKeyType='done'
            value={taskTitle}
            placeholder="Example: pushups for 1 minute"
            placeholderTextColor="rgba(255, 255, 255, .25)"
            />
            <Text style={styles.text}>How many minutes will this task take?</Text>
            <TextInput             
                style={styles.taskInput}
                onChangeText={setTaskTime}
                value={taskTime?.toString()} 
                returnKeyType='done'
                placeholder='1'
                placeholderTextColor="rgba(255, 255, 255, .25)"
                keyboardType="numeric" />
            
            <Text style={styles.text}>How frequently should this task be performed?</Text>
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
            <Pressable 
                onPress={performTaskAction}
                style={styles.basicButton}>
                <Text style={styles.text}>{action[0].toUpperCase() + action.slice(1)} Task</Text>
            </Pressable>
            {
                action === 'update' ?
                <Pressable 
                    onPress={() => {close(false)}}
                    style={styles.basicButton}>
                    <Text style={styles.text}>Cancel</Text>
                </Pressable>
            : <></>
            }
        </View>
    )
}