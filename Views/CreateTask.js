import { View } from 'react-native';
import 'react-native-get-random-values';
import NavBar from './NavBar';
import TaskForm from './TaskForm';
import createTaskStyles from '../styles/createTaskStyles';

export default function CreateTask() {

    return (
        <View style={createTaskStyles.createTaskContainer}>
            <TaskForm action={'create'} initialTask={{title: '', time: null, cadence: 1}} />
            <NavBar current={'create'} />
        </View>
    )
}