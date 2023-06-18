import { FlatList, StyleSheet, Text, Button, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { selectAllTasks, getTasks, deleteTask } from '../state/reducers/tasks';
import styles from '../styles';

export default function TaskList() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    const confirmDelete = (id) => {

    }

    const removeTask = async (id) => {
        await dispatch(deleteTask(id));
        dispatch(getTasks())
    }

    const getDateString = (date) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const myDate =  date ? new Date(date).toLocaleDateString('us-EN', options).replaceAll(',', '') : 'Never'
        return myDate;
    }


    function renderItem({item}) {
        return  <View style={styles.task}>
                    <Text style={styles.taskText}>Title: {item.title}</Text>
                    <Text style={styles.taskText}>Time: {item.time} {item.time === 1 ? 'minute' : 'minutes'}</Text>
                    <Text style={styles.taskText}>Last Performed: {getDateString(item.lastPerformed)}</Text>
                    <Button 
                        title='Delete Task'
                        color='#fb4d3d'
                        onPress={() => {removeTask(item.id)}}
                    />
                </View>
    }

    let content;

    if(taskStatus === 'loading') {
        content = <Text>Loading...</Text>
    } else if(taskStatus === 'succeeded') {
        content = ( 
            tasks.length ?
            <FlatList 
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id} 
        /> :
            <View>
                <Text style={styles.taskText}>You don't have any tasks yet.</Text> 
                <Button onPress={() => navigation.navigate('CreateTask')} title="Click here to create one!" /> 
            </View>
        )
    } else if(taskStatus === 'failed') {
        content = <Text>Error</Text>
    }

    return (
         <View style={styles.taskList}>
            {content}
            </View> 
    )
}
