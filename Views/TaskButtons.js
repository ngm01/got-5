import { Alert, Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles';

export default function TaskButtons() {
    const navigation= useNavigation();
    return (
        <View style={styles.homeButtons}>
            <Button 
                title="CREATE A TASK"
                color="#fb4d3d"
                onPress={() => navigation.navigate('CreateTask')}
            />
            <Button 
                title="VIEW TASK LIST"
                color="#fb4d3d"
                onPress={() => navigation.navigate('TaskList')} />
        </View>
    )
}