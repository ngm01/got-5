import { SafeAreaView, Text, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import NavBar from './NavBar';
import TaskSelector from './TaskSelector';
import basicStyles from '../styles/basicStyles';
import adMobAdIDs from '../util/adMobAdIDs';

export default function Home() {

    let adID;
    if (__DEV__) {
        adID = TestIds.BANNER;
    } else {
        adID = adMobAdIDs.g5_home_screen_ad_id;
    }

    return (
        <View style={basicStyles.homeContainer}>
            <SafeAreaView>
                <BannerAd
                    unitId={adID}
                    size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
                    requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                    }}
                />
            </SafeAreaView>
            <TaskSelector />
            <NavBar current="home"/>
        </View>
    )
}