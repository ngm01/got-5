import { Alert, FlatList, SafeAreaView, Text, Button, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { selectAllTasks, getTasks, deleteTask } from '../state/reducers/tasks';
import styles from '../styles';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function TaskList() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    const confirmDelete = async (id, title) => {
        Alert.alert(
            'Confirm Delete', 
            `Your task\n "${title}" \nwill be deleted. Are you sure?`, 
            [
                {text: 'Yes, Delete', onPress: async () => await removeTask(id), style: 'destructive'},
                {text: 'Cancel', onPress: () => {}, style: 'cancel'}
            ]
        )
    }

    const removeTask = async (id) => {
        console.log("Removing task:", id)
        await dispatch(deleteTask(id));
        dispatch(getTasks())
    }

    const getDateString = (date) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const myDate =  date ? new Date(date).toLocaleDateString('us-EN', options).replaceAll(',', '') : '--'
        return myDate;
    }


    function renderItem({item}) {
        return  <View style={styles.task}>
                    <Text style={styles.taskTextBold}>{item.title}</Text>
                    <Text style={styles.taskText}>{item.time} {item.time === 1 ? 'minute' : 'minutes'}</Text>
                    <Text style={styles.taskText}>Last performed on {getDateString(item.lastPerformed)}</Text>
                    <View style={styles.taskButtonContainer}>
                        <Pressable onPress={() => {confirmDelete(item.id, item.title)}}>
                            <FontAwesomeIcon style={{color: '#fb4d3d'}} size={25} icon={faTrash} />
                        </Pressable>
                        <Pressable onPress={() => {}}>
                            <FontAwesomeIcon style={{color: '#fb4d3d'}} size={25} icon={faPenToSquare} />
                        </Pressable>
                    </View>
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
            <View style={styles.taskListContainer}>
                {content}
                <NavBar current={'list'}/>
            </View>

    )
}
