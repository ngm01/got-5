import { Text, View, Pressable, Alert, TextInput } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllTasks, getTasks } from '../state/reducers/tasks';
import TaskContext from '../state/TaskContext';
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

    useEffect(() => {
        dispatch(getTasks());
    }, [])

    const handlePress = () => {
        if(taskTime === 0 || taskTime === null || taskTime > 60 || taskTime === '') {
            Alert.alert("Please enter a time in minutes between 1 and 60.");
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
                Alert.alert("Looks like you have no tasks to perform! Enjoy some well earned rest!")
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
            <Text style={basicStyles.largeText}>How much time do you have?</Text>
            <View style={taskSelectorStyles.timeInputContainer}>
                <TextInput 
                    style={taskSelectorStyles.timeInput}
                    onChangeText={setTaskTime} 
                    keyboardType="numeric"
                    returnKeyType='done'
                    value={taskTime}
                />
                <Text style={basicStyles.largeText}>minutes</Text>
            </View>
            <Pressable 
                onPress={handlePress}
                style={({ pressed }) => pressed ? basicStyles.basicButtonPressed: basicStyles.basicButton}
                >
                <Text style={basicStyles.largeText}>{currentTask ? 'Get Another Task' : 'Get a Task'}</Text>
            </Pressable>
            <View style={taskSelectorStyles.bigTask}>
                <Text style={taskSelectorStyles.taskDisplay}>{currentTask ? trimTaskTitle(currentTask.title) : 'Enter a time and get a task to get started!'}</Text>
                <Text style={basicStyles.largeText}>{currentTask ? formatTime(currentTask.time) : ''}</Text>
            </View>
            <Pressable 
                onPress={() => {navigation.navigate('Timer')}}
                disabled={!currentTask}
                style={({pressed}) => currentTask ? (pressed ? basicStyles.basicButtonPressed: basicStyles.basicButton) : basicStyles.basicButtonDisabled}
                >
                <Text style={basicStyles.largeText}>START TASK</Text>
            </Pressable>
        </View>
     );
}

export default TaskSelector;