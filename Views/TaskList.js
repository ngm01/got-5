import { FlatList, StyleSheet, Text, Button, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { selectAllTasks, getTasks, deleteTask } from '../state/reducers/tasks';

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
        return date ? date.toLocaleDateString('us-EN', options).replaceAll(',', '') : 'Never'
    }


    function renderItem({item}) {
        return  <View style={styles.task}>
                    <Text style={styles.taskText}>Title: {item.title}</Text>
                    <Text style={styles.taskText}>Time: {item.time} minutes</Text>
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