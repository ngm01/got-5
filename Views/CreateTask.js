import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CreateTask() {
    return (
        <View>
            <Text>What do you want to call this task?</Text>
            <TextInput         
            style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            }}
            placeholder="Enter a task..." 
            />
            <Text>How long will this task take?</Text>
        </View>
    )
}

StyleSheet.create({

})