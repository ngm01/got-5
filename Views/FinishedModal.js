import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import basicStyles from '../styles/basicStyles';
import timerStyles from '../styles/timerStyles';

export default function FinishedModal () {

    const navigation = useNavigation();

    return <View style={timerStyles.finishedModal}>
        <View style={timerStyles.finishedModalText}>
            <Text>FINISHED!</Text>
            <Text>Big Check Mark</Text>
        </View>
        <View style={timerStyles.timerContainer}>
            <Pressable 
                onPress={() => {navigation.navigate('Home')}}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                <Text style={basicStyles.textLargeBlack}>BACK HOME</Text>
            </Pressable>
            <Pressable 
                onPress={() => {}}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                <Text style={basicStyles.textLargeBlack}>RESTART</Text>
            </Pressable>
        </View>
    </View>
}