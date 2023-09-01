import { Text, View } from 'react-native';
import NavBar from './NavBar';
import TaskSelector from './TaskSelector';
import basicStyles from '../styles/basicStyles';
import { colors } from '../styles/baseStyleDefinitions';

export default function Home() {

    return (
        <View style={basicStyles.homeContainer}>
            <View style={basicStyles.adBanner}>
                <Text style={{'color': colors.accent_a}}>Add banner goes here</Text>
            </View>
            <TaskSelector />
            <NavBar current="home"/>
        </View>
    )
}