import { StyleSheet } from "react-native";
import { colors, colors_dark, colors_light, basicButton, flexRowFullWidth, largeText, largeOnBackground, text_large_white } from "./baseStyleDefinitions";

const timeInput = {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 80,
    borderColor: 'transparent',
    backgroundColor: colors_dark.secondary,
    textAlign: 'center',
    ...text_large_white
}

const taskSelectorStyles = StyleSheet.create({
    taskSelectorContainer: {
        display: 'flex',
        position: 'relative',
        top: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '70%',
        // paddingLeft: 5,
        // paddingRight: 5,
        backgroundColor: colors_dark.surface,
        borderColor: colors_dark.accent_a,
        borderWidth: 1,
        borderRadius: 10
    },
    timeInputContainer: {
        ...flexRowFullWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeInput: timeInput,
    timeInputFocused: {
        ...timeInput,
        borderBottomColor: colors_dark.primary
    },
    getTaskButton: {
        ...basicButton,
        width: 275,
        backgroundColor: colors_dark.primary
    },
    getTaskButtonPressed: {
        ...basicButton,
        width: 275,
        backgroundColor: colors_dark.primary_variant
    },
    bigTask: {
        borderRadius: '5%',
        padding: '2%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: colors_dark.secondary,
        width: 300,
        height: '30%',
        shadowColor: '#111',
        shadowOffset: {width: 5, height: -5},
        shadowRadius: '1px',
        shadowOpacity: '.75',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: colors_dark.accent_a,
        borderWidth: 1,
        borderRadius: 15
    },
    taskDisplay: {
        ...text_large_white,
        padding: 10,
        textAlign: 'center'
    },
})

export default taskSelectorStyles;