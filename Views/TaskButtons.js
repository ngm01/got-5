import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

export default function TaskButtons() {
    const navigation= useNavigation();
    return (
        <View style={styles.homeButtons}>
            <Pressable style={styles.basicButton} onPress={() => navigation.navigate('CreateTask')}>
                <Text>Create a Task</Text>
            </Pressable>
            <Pressable style={styles.basicButton} onPress={() => navigation.navigate('TaskList')}>
                <Text>View Task List</Text>
            </Pressable>
        </View>
    )
}