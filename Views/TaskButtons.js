import { Alert, Button, StyleSheet, View } from 'react-native';

export default function TaskButtons() {
    return (
        <View style={styles.taskButtons}>
            <Button 
                title="CREATE A TASK"
                color="#fb4d3d"
                onPress={() => {Alert.alert("Create task")}}
            />
            <Button title="VIEW TASK LIST"
                    color="#fb4d3d"
                    onPress={() => {Alert.alert("View tasks")}} />
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