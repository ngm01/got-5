import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors_dark } from '../styles/baseStyleDefinitions';
import basicStyles from '../styles/basicStyles';
import timerStyles from '../styles/timerStyles';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Notification from './Notification';

export default function FinishedModal () {

    const navigation = useNavigation();

    return <View style={timerStyles.finishedModal}>
        <View style={timerStyles.finishedModalText}>
            <FontAwesomeIcon icon={faCircleCheck} size={100} color={colors_dark.primary_variant} />
            <Text style={[basicStyles.textXXLargeWhite, {textAlign: 'center', marginTop: 50}]}>TASK COMPLETE!</Text>
        </View>
        <Notification />
        <View style={timerStyles.timerButtonsContainer}>
            <Pressable 
                onPress={() => {navigation.navigate('Home')}}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                <Text style={basicStyles.textLargeBlack}>HOME</Text>
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