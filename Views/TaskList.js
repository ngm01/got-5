import { FlatList, StyleSheet, Text, Button, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { selectAllTasks, getTasks } from '../state/reducers/tasks';

export default function TaskList() {

    const dispatch = useDispatch()
    const tasks = useSelector(selectAllTasks);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
        if(taskStatus === 'idle') {
            dispatch(getTasks())
        }
    }, [taskStatus, dispatch])

    function renderItem({item}) {
        return  <View style={styles.task}>
                    <Text style={styles.taskText}>Title: {item.title}</Text>
                    <Text style={styles.taskText}>Time: {item.time} minutes</Text>
                </View>
    }

    let content = <div></div>;

    if(taskStatus === 'loading') {
        content = <p>Loading...</p>
    } else if(taskStatus === 'succeeded') {
        content = ( 
            tasks.length ?
            <FlatList 
            data={foobar}
            renderItem={renderItem}
            keyExtractor={item => item.id} 
        /> :
            <View>
                <Text>You don't have any tasks yet.</Text> 
                <Button title="Click here to create one!" /> 
            </View>
        )
    } else if(taskStatus === 'failed') {
        content = <p>Error</p>
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