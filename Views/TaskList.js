import { Alert, FlatList, Modal, Pressable, SafeAreaView, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { useContext, useEffect } from 'react';
import { selectAllTasks, getTasks, deleteTask } from '../state/reducers/tasks';
import TaskContext from '../state/TaskContext';
import NavBar from './NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrash, faPenToSquare, faPlay, faSortDown, faSortUp, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import TaskForm from './TaskForm';
import { colors_dark, colors_light } from '../styles/baseStyleDefinitions';
import basicStyles from '../styles/basicStyles';
import taskListStyles from '../styles/taskListStyles';
import sortButtonStyles from '../styles/sortButtonStyles';
import DropDownPicker from 'react-native-dropdown-picker';
import { sorter, dummyTask } from '../util/util';

export default function TaskList() {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const tasksFromState = useSelector(selectAllTasks);
    const [currentTask, setCurrentTask] = useContext(TaskContext);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [formType, setFormType] = useState(null)


    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [sortTypes, setSortTypes] = useState([
        {label: 'A-Z', value: 'title'},
        {label: 'Created on', value: 'created'},
        {label: 'Performed on', value: 'lastPerformed'},
        {label: 'Time', value: 'time'},
    ])
    const [tasks, setTasks] = useState([])
    const [sortType, setSortType] = useState('title');
    const [sortAscending, setSortAscending] = useState(true);

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    useEffect(() => {
        setTasks([...tasksFromState]);
    }, [tasksFromState])

    useEffect(() => {
        let sorted = tasks.sort(sorter(sortType, sortAscending))
        setTasks([...sorted])
    }, [sortType, sortAscending])

    const openModal = (type, task) => {
        if(task) {
            setSelectedTask(task);
        }
        setFormType(type)
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
                        <Pressable onPress={() => {openModal('update', item)}}>
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
                    <Pressable style={{textAlign: 'center'}} onPress={() => {openModal('create')}}>
                        <FontAwesomeIcon style={{color: colors_dark.primary, alignSelf: 'center'}} size={30} icon={faCirclePlus} />
                        <Text style={[basicStyles.textSmallWhite, {marginTop: 5}]} >Create New</Text>
                    </Pressable>
                    <View style={basicStyles.dividerPipe}></View>
                    <Text style={[basicStyles.textSmallWhite, {marginRight: 5}]}>Sort by:</Text>
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
                <Pressable onPress={() => openModal('create')} style={basicStyles.basicButton}>
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
                    action={formType} 
                    close={setIsModalVisible} 
                    initialTask={formType === 'update' ? selectedTask : dummyTask}  />
            </Modal>
            {content}
            <NavBar current={'list'}/>
        </SafeAreaView>
    )
}
