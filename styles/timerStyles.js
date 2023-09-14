import { StyleSheet } from "react-native";
import { colors, basicButton, flexRowFullWidth, text_xxlarge_a, text_xlarge_a } from "./baseStyleDefinitions";

const timerStyles = StyleSheet.create({
    timerContainer: {
        display: 'flex',
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
    },
    timerTaskText: {
        ...text_xxlarge_a,
        textAlign: 'center',
        padding: 20,
    },
    timerButtonsContainer: {
        ...flexRowFullWidth,
        justifyContent: 'space-evenly'
    },
    timerButton: {
        ...basicButton,
        backgroundColor: colors.primary,
        textAlign: 'justify',
        width: 175
    },
    timerButtonPressed: {
        ...basicButton,
        backgroundColor: colors.primary_variant,
        width: 175
    },
    timerText: {
        ...text_xxlarge_a,
        display: 'flex',
        textAlign: 'center',
        width: '75%'
    },
    finishedModal: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.background
    },
    finishedModalText: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '35%'
    }
})

export default timerStyles;