import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../styles/baseStyleDefinitions';
import basicStyles from '../styles/basicStyles';
import timerStyles from '../styles/timerStyles';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export default function FinishedModal () {

    const navigation = useNavigation();

    const restart = () => {
        navigation.navigate('Timer');
    } 

    return <View style={timerStyles.finishedModal}>
        <View style={timerStyles.finishedModalText}>
            <FontAwesomeIcon icon={faCircleCheck} size={100} color={colors.primary_variant} />
            <Text style={[basicStyles.textXXLargePrimary, {textAlign: 'center', marginTop: 50}]}>TASK COMPLETE!</Text>
        </View>
        {/* <Notification /> */}
        <View style={timerStyles.timerButtonsContainer}>
            <Pressable 
                onPress={() => {navigation.navigate('Home')}}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                <Text style={basicStyles.textLargeSecondary}>HOME</Text>
            </Pressable>
            <Pressable 
                onPress={restart}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                <Text style={basicStyles.textLargeSecondary}>RESTART</Text>
            </Pressable>
        </View>
    </View>
}