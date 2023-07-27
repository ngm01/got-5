import { Alert, FlatList, Modal, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { useContext, useEffect } from 'react';
import { selectAllTasks, getTasks, deleteTask } from '../state/reducers/tasks';
import TaskContext from '../state/TaskContext';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash, faPenToSquare, faPlay, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TaskForm from './TaskForm';
import { colors_dark } from '../styles/baseStyleDefinitions';
import basicStyles from '../styles/basicStyles';
import taskListStyles from '../styles/taskListStyles';
import SortButton from './SortButton';
import sortButtonStyles from '../styles/sortButtonStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { current } from 'immer';

export default function TaskList() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const tasks = useSelector(selectAllTasks);
    const [currentTask, setCurrentTask] = useContext(TaskContext);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [sortTypes, setSortTypes] = useState([
        {label: 'A-Z', value: 'a-z'},
        {label: 'Created on', value: 'created'},
        {label: 'Performed on', value: 'performed'},
        {label: 'Time', value: 'time'},
    ])
    const [sortType, setSortType] = useState('a-z');
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        dispatch(getTasks())
        tasks.forEach(task => {
            console.log(`${task.title}: ${task.timesPerformed}`)
        });
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
                    <Text style={[{...basicStyles.textSmallWhite, fontWeight: 'bold'}]}>{item.title}</Text>
                    <Text style={basicStyles.textSmallWhite}>{item.time} {item.time === 1 ? 'minute' : 'minutes'}</Text>
                    <Text style={basicStyles.textSmallWhite}>Last performed on: {getDateString(item.lastPerformed)}</Text>
                    <Text style={basicStyles.textSmallWhite}>Times performed: {item.timesPerformed ? item.timesPerformed : '--'}</Text>
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
            <View>
                <View style={taskListStyles.sortBar}>
                    <Text style={[basicStyles.textMediumWhite, {paddingRight: 5}]}>Sort by:</Text>
                    <DropDownPicker
                        open={isDropdownOpen}
                        setOpen={setIsDropdownOpen}
                        items={sortTypes}
                        setItems={setSortTypes}
                        value={sortType}
                        setValue={setSortType}
                        containerStyle={{width: 150}}
                    />
                    <Pressable onPress={() => {setSortAscending(current => !current)}} style={sortButtonStyles.buttonContainer}>
                        <View style={sortButtonStyles.icons}>
                            <FontAwesomeIcon style={sortAscending ? sortButtonStyles.icon_selected : sortButtonStyles.icon} size={25} icon={faSortUp} />
                            <FontAwesomeIcon style={sortAscending ? sortButtonStyles.icon : sortButtonStyles.icon_selected} size={25} icon={faSortDown} />
                        </View>
                    </Pressable>
                </View>
                <FlatList 
                    contentContainerStyle={{paddingBottom: 100}}
                    data={tasks}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
 :
            <View style={taskListStyles.emptyList}>
                <Text style={[basicStyles.textLargeWhite, {'textAlign': 'center'}]}>Looks like you don't have any tasks yet.</Text>
                <Pressable onPress={() => navigation.navigate('CreateTask')} style={basicStyles.basicButton}>
                    <Text style={basicStyles.textMediumBlack}>Click here to create one!</Text>
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
