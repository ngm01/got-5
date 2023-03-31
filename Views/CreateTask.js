import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTasks, createTask } from '../state/reducers/tasks';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
/*
    {
        
    }
*/

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
            alert("Sorry! \n We encoutered an error attempting to create this task!")
        }
        alert(`created task:\n${taskTitle}`);
    }

    return (
        <View>
            <Text>What do you want to call this task?</Text>
            <TextInput         
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            }}
            onChangeText={setTaskTitle}
            value={taskTitle}
            placeholder="Create a task..." 
            />
            <Text>How many minutes will this task take?</Text>
            <TextInput             
                style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                }}
                onChangeText={setTaskTime} 
                returnKeyType='done'
                keyboardType="numeric" />
            
            <Text>How frequently should this task be performed? ℹ️</Text>
            <DropDownPicker
                open={open}
                value={taskCadence}
                items={items}
                setOpen={setOpen}
                setValue={setTaskCadence}
                setItems={setItems}
             />
            <Button
                title="Add Task"
                color="#fb4d3d"
                onPress={createNewTask}
             />
        </View>
    )
}

StyleSheet.create({

})