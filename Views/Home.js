import { useContext } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar';
import TaskSelector from './TaskSelector';
import styles from '../styles';
import TaskContext from '../state/TaskContext';

export default function Home() {

    const navigation = useNavigation();
    const [currentTask, setCurrentTask] = useContext(TaskContext);

    return (
        <View style={styles.homeContainer}>
            <View style={styles.adBanner}>
                <Text style={{'color': '#fff'}}>Add banner goes here</Text>
            </View>
            <TaskSelector />
            <Text style={styles.text}>{currentTask ? currentTask.title : 'TODO: Visualizer...'}</Text>
            <Pressable 
                onPress={() => {navigation.navigate('Timer')}}
                disabled={!currentTask}
                style={styles.basicButton}>
                <Text style={styles.text}>START</Text>
            </Pressable>
            <NavBar current="home"/>
        </View>
    )
}