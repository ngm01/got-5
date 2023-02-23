import { Alert, Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TaskButtons() {
    const navigation= useNavigation();
    return (
        <View style={styles.taskButtons}>
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

const styles = StyleSheet.create({
    taskButtons: {
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }
})