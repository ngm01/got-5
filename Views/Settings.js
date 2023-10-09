import { Button, Pressable, Text, View } from "react-native";
import { colors } from "../styles/baseStyleDefinitions";
import basicStyles from "../styles/basicStyles";
import NavBar from "./NavBar";
import * as Linking from 'expo-linking';

function Settings() {

    return ( 
        <View style={basicStyles.settingsContainer}>
            <View style={basicStyles.settingsAbout}>
                <Text style={basicStyles.textLargeA}>About</Text>
                <Text style={basicStyles.textMediumA}>Got 5? v1.0.0</Text>
                <Text style={basicStyles.textMediumA}>© 2023 Nathaniel Moore</Text>
                <Text style={basicStyles.textMediumA}>Thank you for using Got 5!</Text>
                <Text style={[basicStyles.textMediumA, {textAlign: 'center'}]}>To report a bug, or suggest improvements, please email me at ngm01_contact@protonmail.com</Text>
                <View style={basicStyles.settingsLinksBlock}>
                    <Text style={basicStyles.textMediumA}>Notification sound provided by </Text>
                    <Pressable onPress={() => {Linking.openURL('https://freesound.org/people/FoolBoyMedia/')}}> 
                        <Text style={basicStyles.settingsLink}>FoolBoyMedia </Text> 
                    </Pressable> 
                    <Text style={basicStyles.textMediumA}>under a </Text> 
                    <Pressable onPress={() => {Linking.openURL('https://creativecommons.org/licenses/by/4.0/')}}>
                        <Text style={basicStyles.settingsLink}>Creative Commons Attribution 4.0 license</Text>
                    </Pressable>
                </View>
            </View>
            <NavBar current={'settings'} />
        </View>
     );
}

export default Settings;