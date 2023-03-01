import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
/*
    {
        
    }
*/

export default function CreateTask() {

    function addTask() {

    }

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
            <div>
            <input type="number" id="time" min="1" />
            </div>
            <Text>How often should this task be performed?</Text>
            <div>
                <select id="cadence">
                    <option value="daily">daily</option>
                    <option value="weekly">weekly</option>
                    <option value="biweekly">twice a week</option>
                    <option value="monthly">monthly</option>
                    <option value="bimonthly">twice a month</option>
                    <option value="once">one time only</option>
                </select>
            </div>
            <Button
                title="Add Task"
                color="#fb4d3d"
                onPress={addTask}
             />
        </View>
    )
}

StyleSheet.create({

})