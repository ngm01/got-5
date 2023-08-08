import { Text, View, Pressable, Alert, TextInput } from 'react-native';
import { useContext, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, getTasks } from '../state/reducers/tasks';
import TaskContext from '../state/TaskContext';
import { colors_dark, fontSizes } from '../styles/baseStyleDefinitions';
import basicStyles from '../styles/basicStyles';
import taskSelectorStyles from '../styles/taskSelectorStyles';
import { useNavigation } from '@react-navigation/native';
import { trimTaskTitle, formatTime } from '../util/util';

function TaskSelector() {

    const dispatch = useDispatch();
    const navigation = useNavigation()
    const tasks = useSelector(selectAllTasks);
    const [currentTask, setCurrentTask] = useContext(TaskContext);
    const [taskTime, setTaskTime] = useState(0);
    const [isInputFocused, setIsInputFocused] = useState(false);
    
    const timeInputRef = useRef()

    useEffect(() => {
        dispatch(getTasks());
        setTaskTime(null);
        setCurrentTask(null)
    }, [])

    const handlePress = () => {
        if(tasks.length === 0) {
            Alert.alert(
                'Task List Empty', 
                "Looks like you haven't created any tasks. Would you like to create one now?", 
                [
                    {text: 'No Thanks', onPress: () => {}, style: 'cancel'},
                    {text: 'Yes, Create', onPress: () => navigation.navigate('TaskList'), style: 'default'}
                ]
            )
            return;
        }
        if(taskTime === 0 || taskTime === null || taskTime > 60 || taskTime === '') {
            Alert.alert("Please enter a time in minutes between 1 and 60.");
            timeInputRef.current.focus()
            return;
        }
        const tasksInTime = tasks.filter(task => task.time <= taskTime);
        if(tasksInTime.length === 0) {
            const minutes = taskTime == 1 ? 'minute' : 'minutes'
            Alert.alert(`You haven't created any tasks that can be done in ${taskTime} ${minutes} or less.`)
        } else {
            const availableTasks = tasksInTime.filter(checkCanPerform)
            if(availableTasks.length) {
                const selectedTask = availableTasks[Math.floor(Math.random() * availableTasks.length)]
                setCurrentTask(selectedTask);
            } else {
                Alert.alert("Looks like you've performed all your tasks! Enjoy some well-earned rest!")
            }
        }
    }
    
    const checkCanPerform = (task) => {
        if(task.lastPerformed === null) {
            return true;
        } else {
            const lastPerformed = new Date(task.lastPerformed);
            const cadenceCheck = new Date(
                lastPerformed.getFullYear(),
                lastPerformed.getMonth(),
                lastPerformed.getDate() + task.cadence
            )
            const today = new Date();
            return today > cadenceCheck;
        }
    }
    return ( 
        <View style={taskSelectorStyles.taskSelectorContainer}>
            <Text style={basicStyles.textLargeWhite}>How much time do you have?</Text>
            <View style={taskSelectorStyles.timeInputContainer}>
                <TextInput 
                    style={isInputFocused ? taskSelectorStyles.timeInputFocused : taskSelectorStyles.timeInput}
                    onFocus={() => {setIsInputFocused(true)}}
                    onBlur={() => {setIsInputFocused(false)}}
                    onChangeText={setTaskTime} 
                    keyboardType="numeric"
                    returnKeyType='done'
                    value={taskTime}
                    ref={timeInputRef}
                />
                <Text style={basicStyles.textLargeWhite}>minutes</Text>
            </View>
            <Pressable 
                onPress={handlePress}
                style={({ pressed }) => pressed ? taskSelectorStyles.getTaskButtonPressed: taskSelectorStyles.getTaskButton}
                >
                <Text style={basicStyles.textLargeBlack}>{currentTask ? 'Get Another Task' : 'Get a Task'}</Text>
            </Pressable>
            <View style={taskSelectorStyles.bigTask}>
                <Text style={taskSelectorStyles.taskDisplay}>{currentTask ? trimTaskTitle(currentTask.title) : 'Enter a time and get a task to get started!'}</Text>
                <Text style={basicStyles.textLargeWhite}>{currentTask ? formatTime(currentTask.time) : ''}</Text>
            </View>
            <Pressable 
                onPress={() => {navigation.navigate('Timer')}}
                disabled={!currentTask}
                style={({pressed}) => currentTask ? (pressed ? basicStyles.basicButtonPressed: basicStyles.basicButton) : basicStyles.basicButtonDisabled}
                >
                <Text style={{color: colors_dark.surface, fontSize: fontSizes.large}}>START!</Text>
            </Pressable>
        </View>
     );
}

export default TaskSelector;