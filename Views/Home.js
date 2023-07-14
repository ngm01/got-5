import { Text, View } from 'react-native';
import NavBar from './NavBar';
import TaskSelector from './TaskSelector';
import basicStyles from '../styles/basicStyles';

export default function Home() {

    return (
        <View style={basicStyles.homeContainer}>
            <View style={basicStyles.adBanner}>
                <Text style={{'color': '#fff'}}>Add banner goes here</Text>
            </View>
            <TaskSelector />
            <NavBar current="home"/>
        </View>
    )
}