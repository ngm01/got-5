import { Text, View } from "react-native";
import { colors_dark } from "../styles/baseStyleDefinitions";
import basicStyles from "../styles/basicStyles";
import NavBar from "./NavBar";

function Settings() {



    return ( 
        <View style={basicStyles.homeContainer}>
            <Text style={basicStyles.textLargeWhite}>Settings</Text>
            <Text style={basicStyles.textSmallWhite}>TODO: Light/Dark modes</Text>
            <Text style={basicStyles.textLargeWhite}>About</Text>
            <Text style={basicStyles.textMediumWhite}>© 2023 Nathaniel Moore</Text>
            <Text style={basicStyles.textMediumWhite}>To report a bug, or suggest improvements, please email me at ngm01_contact@protonmail.com</Text>
            <Text style={basicStyles.textMediumWhite}>Buy me a Coffee at ko-fi.com/ngm01</Text>
            <NavBar current={'settings'} />
        </View>
     );
}

export default Settings;