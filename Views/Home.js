import { useContext } from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import NavBar from './NavBar';
import TaskSelector from './TaskSelector';
import styles from '../styles';
import { TaskContext } from '../App';

export default function Home() {

    const [currentTask, setCurrentTask] = useContext(TaskContext);
    // TODO: some kind of start timer ref...

    const startTimer = () => {
        if(currentTask === null) {
            Alert.alert("Please select a task.")
        } else { 
            useNavigation('Timer')
        }
    }

    return (
        <View style={styles.homeContainer}>
            <View style={styles.adBanner}>
                <Text style={{'color': '#fff'}}>Add banner goes here</Text>
            </View>
            <TaskSelector />
            <Text>TODO: Task selection visualizer...</Text>
            <Pressable 
                onPress={startTimer}
                style={styles.basicButton}>
                <Text style={styles.text}>START</Text>
            </Pressable>
            <NavBar current="home"/>
        </View>
    )
}