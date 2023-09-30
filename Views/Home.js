import { Text, View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import NavBar from './NavBar';
import TaskSelector from './TaskSelector';
import basicStyles from '../styles/basicStyles';
import { colors } from '../styles/baseStyleDefinitions';

export default function Home() {

    const adId = TestIds.BANNER;
    console.log(__DEV__);

    return (
        <View style={basicStyles.homeContainer}>
            <BannerAd
                unitId={adId}
                size={BannerAdSize.INLINE_ADAPTIVE_BANNER}
                requestOptions={{
                requestNonPersonalizedAdsOnly: true,
                }}
            />
            {/* <View style={basicStyles.adBanner}>
                <Text style={{'color': colors.accent_a}}>Add banner goes here</Text>
            </View> */}

            <TaskSelector />
            <NavBar current="home"/>
        </View>
    )
}