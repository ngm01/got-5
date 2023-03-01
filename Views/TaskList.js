import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function TaskList() {

    const fakeData = [
        {
            time: 1,
            title: 'start laundry',
            lastPerformed: null,
            cadence: 'weekly',
            created: null,
            tags: []
        },
        {
            time: 15,
            title: 'do the dishes',
            lastPerformed: null,
            cadence: 'daily',
            created: null,
            tags: []
        },
        {
            time: 15,
            title: 'vacuum living room',
            lastPerformed: null,
            cadence: 'bimonthly',
            created: null,
            tags: []
        },
    ]

    return (
         <View>
            <FlatList data={fakeData}
                renderItem={({item}) => <Text>{item.title}</Text>} />
        </View>
    )
}