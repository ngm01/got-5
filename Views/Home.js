import { Text, View } from 'react-native';
import NavBar from './NavBar';
import TaskSelector from './TaskSelector';
import styles from '../styles';
import TaskContext from '../state/TaskContext';

export default function Home() {

    return (
        <View style={styles.homeContainer}>
            <View style={styles.adBanner}>
                <Text style={{'color': '#fff'}}>Add banner goes here</Text>
            </View>
            <TaskSelector />
            <NavBar current="home"/>
        </View>
    )
}