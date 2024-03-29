import { useContext } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import { useNavigation } from '@react-navigation/native';
import TaskContext from '../state/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { colors } from '../styles/baseStyleDefinitions';
import basicStyles from '../styles/basicStyles';
import timerStyles from '../styles/timerStyles';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import AdMobAdIDs from '../util/adMobAdIDs';

export default function FinishedModal () {

    let adID;
    if(__DEV__) {
        adID = TestIds.BANNER;
    } else {
        adID = AdMobAdIDs.g5_finished_screen_ad_id;
    }

    const navigation = useNavigation();

    const [currentTask, setCurrentTask] = useContext(TaskContext);

    const goHome = () => {
        setCurrentTask(null);
        navigation.navigate('Home');
    }

    const restart = () => {
        navigation.navigate('Timer');
    } 

    return <View style={timerStyles.finishedModal}>
        <View style={timerStyles.finishedModalText}>
            <FontAwesomeIcon icon={faCircleCheck} size={100} color={colors.primary_variant} />
            <Text style={[basicStyles.textXXLargeA, {textAlign: 'center', marginTop: 50}]}>FINISHED!</Text>
        </View>
        <View style={timerStyles.timerButtonsContainer}>
            <Pressable 
                onPress={goHome}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                <Text style={basicStyles.textLargeB}>HOME</Text>
            </Pressable>
            <Pressable 
                onPress={restart}
                style={({ pressed }) => pressed ? timerStyles.timerButtonPressed : timerStyles.timerButton}
                >
                <Text style={basicStyles.textLargeB}>RESTART</Text>
            </Pressable>
        </View>
        <SafeAreaView>
            <BannerAd
                unitId={adID}
                size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                requestOptions={{
                requestNonPersonalizedAdsOnly: true,
                }}
            />
        </SafeAreaView>
    </View>
}