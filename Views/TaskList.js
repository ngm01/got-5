import { FlatList, StyleSheet, Text, Button, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {

        async function getAllTasks() {
            const allKeys = await AsyncStorage.getAllKeys();
            const allTasks = await AsyncStorage.multiGet(allKeys);
            let parsedTasks = allTasks.map(task =>  JSON.parse(task[1]))
            console.log("tasks:", parsedTasks);
            setTasks(parsedTasks);
        }

        getAllTasks();

    }, [])

    function renderItem({item}) {
        return  <View style={styles.task}>
                    <Text style={styles.taskText}>Title: {item.title}</Text>
                    <Text style={styles.taskText}>Time: {item.time} minutes</Text>
                </View>
    }

    return (
         <View style={styles.taskList}>
            {
                tasks.length ?
                <FlatList 
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id} 
            /> :
                <View>
                    <Text>You don't have any tasks yet.</Text> 
                    <Button title="Click here to create one!" /> 
                </View>
            }
            </View> 
    )
}

const styles = StyleSheet.create({
    taskList: {
        backgroundColor: '#011627',
        height: '100%'
    },
    task: {
        borderWidth: '5px',
        borderColor: '#fb4d3d',
        padding: '2%',
        marginBottom: '2%',
        backgroundColor: '#3581b8',
        width: '50%'
    },
    taskText: {
        color: '#ece8ef',
    }
})