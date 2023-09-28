import { Pressable, Text, View } from "react-native";
import { colors } from "../styles/baseStyleDefinitions";
import basicStyles from "../styles/basicStyles";
import NavBar from "./NavBar";

function Settings() {



    return ( 
        <View style={basicStyles.settingsContainer}>
            <Text style={basicStyles.textLargeA}>About</Text>
            <Text style={basicStyles.textMediumA}>Got 5? v1.0</Text>
            <Text style={basicStyles.textMediumA}>© 2023 Nathaniel Moore</Text>
            <Text style={basicStyles.textMediumA}>Thank you for using Got 5!</Text>
            <Text style={[basicStyles.textMediumA, {textAlign: 'center'}]}>To report a bug, or suggest improvements, please email me at ngm01_contact@protonmail.com</Text>
            <Text style={basicStyles.textMediumA}></Text>
            <NavBar current={'settings'} />
        </View>
     );
}

export default Settings;