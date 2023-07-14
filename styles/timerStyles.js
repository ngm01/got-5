import { StyleSheet } from "react-native";
import { colors, largeText, basicButton, flexRowFullWidth, xxLargeText } from "./baseStyleDefinitions";

const timerStyles = StyleSheet.create({
    timerContainer: {
        display: 'flex',
        backgroundColor: colors.primary,
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
        backgroundColor: colors.action,
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