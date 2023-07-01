import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { getTasks, createTask } from '../state/reducers/tasks';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles';
import NavBar from './NavBar';
import TaskForm from './TaskForm';

export default function CreateTask() {

    return (
        <View style={styles.createTaskContainer}>
            <TaskForm action={'create'} initialTask={{title: '', time: null, cadence: 1}} />
            <NavBar current={'create'} />
        </View>

    )
}