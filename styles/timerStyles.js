import { StyleSheet } from "react-native";
import { colors, colors_dark, largeText, basicButton, flexRowFullWidth, xxLargeText } from "./baseStyleDefinitions";

const timerStyles = StyleSheet.create({
    timerContainer: {
        display: 'flex',
        backgroundColor: colors_dark.background,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
    },
    timerTaskText: {
        ...largeText,
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
        backgroundColor: colors_dark.selected,
        width: 175
    },
    timerText: {
        ...xxLargeText,
        display: 'flex',
        textAlign: 'center',
        width: '75%'
    },
})

export default timerStyles;