import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTasks, createTask, updateTask } from '../state/reducers/tasks';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { colors_dark, colors_light } from '../styles/baseStyleDefinitions';
import createTaskStyles from '../styles/createTaskStyles';
import basicStyles from '../styles/basicStyles';
import { useEffect } from 'react';

export default function TaskForm({action, close, initialTask}) {

    const dispatch = useDispatch();

    const [taskTitle, setTaskTitle] = useState(initialTask.title);
    const [taskTime, setTaskTime] = useState(initialTask.time);
    const [taskCadence, setTaskCadence] = useState(initialTask.cadence);
    const [isFocused, setIsFocused] = useState({
        title: false,
        minutes: false
    })

    const titleInputRef = useRef();
    const minutesInputRef = useRef();

    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
      {label: 'Daily', value: 1},
      {label: 'Weekly', value: 7},
      {label: 'Every other week', value: 14},
      {label: 'Monthly', value: 30},
      {label: 'Only once', value: 0}
    ]);

    async function performTaskAction () {
        const parsedTime = parseInt(taskTime);
        if(taskTitle.trim().length === 0 ) {
            Alert.alert("Please give your task a title.");
            titleInputRef.current.focus()
            return;
        }
        if( Number.isNaN(parsedTime) || parsedTime === 0 || parsedTime > 60) {
            Alert.alert("Please enter a time, in minutes, between 1 and 60.");
            minutesInputRef.current.focus()
            return;
        } else {
            const today = new Date();
            const id = initialTask.id ? initialTask.id : uuidv4();
            const thisTask = {
                id: id,
                title: taskTitle.trim(),
                time: parsedTime,
                cadence: taskCadence,
                created: initialTask.created ? initialTask.created : today,
                lastPerformed: initialTask.lastPerformed ? initialTask.lastPerformed : null,
                tags: []
            }
            try {
                if(action === 'create' || action === 'create-list') {
                    await dispatch(createTask(thisTask));
                } else if (action === 'update') {
                    await dispatch(updateTask(thisTask))
                }
                dispatch(getTasks());
            } catch (e) {
                console.log(`error ${action}ing task:`, e);
                Alert.alert(`Sorry! \n We encoutered an error attempting to ${action} this task!`)
            }
            Alert.alert(`${action}d task:\n${taskTitle}`);
            setTaskTitle('');
            setTaskTime(null);
            setTaskCadence(1);
            if(close) {
                close(false)
            }
        }
    }

    return (
        <View style={createTaskStyles.createTaskForm}>
            <Pressable style={createTaskStyles.closeXContainer} onPress={() => {close(false)}}>
                <FontAwesomeIcon style={{color: colors_dark.primary, alignSelf: 'flex-end'}} size={20} icon={faX} />
            </Pressable> 
            <Text style={basicStyles.textMediumWhite}>What do you want to call this task?</Text>
            <TextInput         
                style={isFocused.title ? createTaskStyles.taskInputFocused : createTaskStyles.taskInput}
                onChangeText={setTaskTitle}
                returnKeyType='done'
                value={taskTitle}
                placeholder="Example: pushups for 1 minute"
                placeholderTextColor="rgba(255, 255, 255, .25)"
                ref={titleInputRef}
                onFocus={() => { setIsFocused({...isFocused, title: true}) }}
                onBlur={() => { setIsFocused({...isFocused, title: false}) }}
                onSubmitEditing={() => minutesInputRef.current.focus()}
            />
            <Text style={basicStyles.textMediumWhite}>How many minutes will this task take?</Text>
            <TextInput             
                style={isFocused.minutes ? createTaskStyles.taskInputFocused : createTaskStyles.taskInput}
                onChangeText={setTaskTime}
                value={taskTime?.toString()} 
                returnKeyType='done'
                placeholder='1'
                placeholderTextColor="rgba(255, 255, 255, .25)"
                keyboardType="numeric"
                ref={minutesInputRef}
                onFocus={() => { setIsFocused({...isFocused, minutes: true}) }}
                onBlur={() => { setIsFocused({...isFocused, minutes: false}) }}
            />
            
            <Text style={basicStyles.textMediumWhite}>How frequently should this task be performed?</Text>
            <View style={createTaskStyles.createTaskDropdownContainer}>
                <DropDownPicker
                    open={open}
                    value={taskCadence}
                    items={items}
                    setOpen={setOpen}
                    setValue={setTaskCadence}
                    setItems={setItems}
                    style={createTaskStyles.createTaskDropdown}
                    containerStyle={{width: 250}}
                />
            </View>
            <Pressable 
                onPress={performTaskAction}
                style={({ pressed }) => pressed ? basicStyles.basicButtonPressed : basicStyles.basicButton}
                >
                <Text style={basicStyles.mediumOnPrimary}>{action[0].toUpperCase() + action.replace('-list', '').slice(1)} Task</Text>
            </Pressable>
            {
                action === 'update' ?
                <Pressable 
                    onPress={() => {close(false)}}
                    style={({ pressed }) => pressed ? basicStyles.basicButtonPressed : basicStyles.basicButton}
                    >
                    <Text style={basicStyles.mediumOnPrimary}>Cancel</Text>
                </Pressable>
            : <></>
            }
        </View>
    )
}