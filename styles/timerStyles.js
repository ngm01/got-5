import { StyleSheet } from "react-native";
import { colors_dark, colors_light, basicButton, flexRowFullWidth, text_xxlarge_white, text_xlarge_white } from "./baseStyleDefinitions";

const timerStyles = StyleSheet.create({
    timerContainer: {
        display: 'flex',
        backgroundColor: colors_dark.background,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
    },
    timerTaskText: {
        ...text_xxlarge_white,
        textAlign: 'center',
        padding: 20,
    },
    timerButtonsContainer: {
        ...flexRowFullWidth,
        justifyContent: 'space-evenly'
    },
    timerButton: {
        ...basicButton,
        backgroundColor: colors_dark.primary,
        width: 175
    },
    timerButtonPressed: {
        ...basicButton,
        backgroundColor: colors_dark.primary_variant,
        width: 175
    },
    timerText: {
        ...text_xxlarge_white,
        display: 'flex',
        textAlign: 'center',
        width: '75%'
    },
})

export default timerStyles;