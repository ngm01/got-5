import { Alert, Button, FlatList, Modal, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { useContext, useEffect } from 'react';
import { selectAllTasks, getTasks, deleteTask } from '../state/reducers/tasks';
import TaskContext from '../state/TaskContext';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash, faPenToSquare, faCirclePlay, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TaskForm from './TaskForm';
import { colors, colors_dark } from '../styles/baseStyleDefinitions';
import basicStyles from '../styles/basicStyles';
import taskListStyles from '../styles/taskListStyles';

export default function TaskList() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const [currentTask, setCurrentTask] = useContext(TaskContext);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    const openUpdateModal = (task) => {
        setSelectedTask(task);
        setIsModalVisible(true);
    }

    const startTask = (task) => {
        setCurrentTask(task);
        navigation.navigate('Timer');
    }

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
        await dispatch(deleteTask(id));
        dispatch(getTasks())
    }

    const getDateString = (date) => {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const myDate =  date ? new Date(date).toLocaleDateString('us-EN', options).replaceAll(',', '') : '--'
        return myDate;
    }


    function renderItem({item}) {
        return  <View style={taskListStyles.task}>
                    <Text style={basicStyles.smallTextBold}>{item.title}</Text>
                    <Text style={basicStyles.smallText}>{item.time} {item.time === 1 ? 'minute' : 'minutes'}</Text>
                    <Text style={basicStyles.smallText}>Last performed on {getDateString(item.lastPerformed)}</Text>
                    <Text style={basicStyles.smallText}>Times performed: {item.timesPerformed}</Text>
                    <View style={taskListStyles.taskButtonContainer}>
                        <Pressable onPress={() => {openUpdateModal(item)}}>
                            <FontAwesomeIcon style={{color: colors_dark.primary}} size={25} icon={faPenToSquare} />
                        </Pressable>
                        <Pressable onPress={() => {startTask(item)}}>
                            <FontAwesomeIcon style={{color: colors_dark.primary}} size={25} icon={faPlay} />
                        </Pressable>
                        <Pressable onPress={() => {confirmDelete(item.id, item.title)}}>
                            <FontAwesomeIcon style={{color: colors_dark.primary}} size={25} icon={faTrash} />
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
            contentContainerStyle={{paddingBottom: 100}}
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        /> :
            <View style={taskListStyles.emptyList}>
                <Text style={[basicStyles.largeText, {'textAlign': 'center'}]}>Looks like you don't have any tasks yet.</Text>
                <Pressable onPress={() => navigation.navigate('CreateTask')} style={basicStyles.basicButton}>
                    <Text style={basicStyles.text}>Click here to create one!</Text>
                </Pressable> 
            </View>
        )
    } else if(taskStatus === 'failed') {
        content = <Text>Error</Text>
    }

    return (
        <SafeAreaView style={taskListStyles.taskListContainer}>
            <View style={isModalVisible ? taskListStyles.taskListContainerOverlay : taskListStyles.taskListContainerOverlayHidden}></View>
            <Modal 
                visible={isModalVisible} animationType='slide' transparent={true}         
                onRequestClose={() => {setIsModalVisible(!modalVisible) }}
            >
                <TaskForm 
                    action={'update'} 
                    close={setIsModalVisible} 
                    initialTask={selectedTask}  />
            </Modal>
            {content}
            <NavBar current={'list'}/>
        </SafeAreaView>
    )
}
