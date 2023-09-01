import { Pressable, Text, View } from "react-native";
import { colors, colors_light, setColors } from "../styles/baseStyleDefinitions";
import basicStyles from "../styles/basicStyles";
import NavBar from "./NavBar";

function Settings() {



    return ( 
        <View style={basicStyles.homeContainer}>
            <Text style={basicStyles.textLargePrimary}>Settings</Text>
            <Text style={basicStyles.textSmallPrimary}>TODO: Light/Dark modes</Text>
            <View>
                <Pressable style={basicStyles.basicButton} onPress={() => {setColors('light')}}>
                    <Text style={{color: colors.accent_b}}>Light</Text>
                </Pressable>
                <Pressable style={basicStyles.basicButton} onPress={() => {setColors('dark')}}>
                    <Text style={{color: colors.accent_b}}>Dark</Text>
                </Pressable>
            </View>
            <Text style={basicStyles.textLargePrimary}>About</Text>
            <Text style={basicStyles.textMediumPrimary}>© 2023 Nathaniel Moore</Text>
            <Text style={basicStyles.textMediumPrimary}>To report a bug, or suggest improvements, please email me at ngm01_contact@protonmail.com</Text>
            <Text style={basicStyles.textMediumPrimary}>Buy me a Coffee at ko-fi.com/ngm01</Text>
            <NavBar current={'settings'} />
        </View>
     );
}

export default Settings;