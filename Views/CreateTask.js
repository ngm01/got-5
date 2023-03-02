import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
/*
    {
        
    }
*/

export default function CreateTask() {

    const [taskTitle, setTaskTitle] = useState('yo');
    const [taskTime, setTaskTime] = useState('');

    const [open, setOpen] = useState(false);
    const [taskCadence, setTaskCadence] = useState('weekly');
    const [items, setItems] = useState([
      {label: 'Daily', value: 'daily'},
      {label: 'Weekly', value: 'weekly'},
      {label: 'Every other week', value: 'biweekly'},
      {label: 'Monthly', value: 'monthly'},
      {label: 'Only once', value: 'once'}
    ]);
  

    function addTask() {
        alert(`added task: ${taskTitle}, which will take ${taskTime} minutes, to be performed ${taskCadence}`);
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
            placeholder="Enter a task..." 
            />
            <Text>How many minutes will this task take?</Text>
            <TextInput             
                style={{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                }}
                onChangeText={setTaskTime} 
                keyboardType="numeric" />
            
            <Text>How often should this task be performed? ℹ️</Text>
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
                onPress={addTask}
             />
        </View>
    )
}

StyleSheet.create({

})