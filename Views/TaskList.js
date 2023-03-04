import { FlatList, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function TaskList() {

    const [tasks, setTasks] = useState([])

    useEffect(() => {

    }, [tasks])

    async function getAllKeys() {
        try {
            return await AsyncStorage.getAllKeys();
        } catch (e) {
            console.log("error getting keys:", e)
        }
    }

    async function getOneTask(key) {
        try {
            return await AsyncStorage.getItem(key);
        } catch (e) {
            console.log("error getting task", e)
        }
    }

    return (
         <View>
            <FlatList data={keys}
                renderItem={({item}) => <Text>{item}</Text>} />
        </View>
    )
}