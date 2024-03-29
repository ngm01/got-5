import { StyleSheet } from "react-native";
import { colors, basicButton, flexRowFullWidth, text_large_a, text_large_b } from "./baseStyleDefinitions";

const timeInput = {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: 80,
    borderColor: 'gray',
    backgroundColor: colors.white,
    color: colors.accent_b,
    borderRadius: 5,
    textAlign: 'center',
    ...text_large_b
}

const taskSelectorStyles = StyleSheet.create({
    taskSelectorContainer: {
        display: 'flex',
        position: 'relative',
        top: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '75%',
        width: '95%',
        padding: 15,
        backgroundColor: colors.surface,
        borderColor: colors.accent_b,
        borderWidth: 1,
        borderRadius: 10
    },
    timeInputContainer: {
        ...flexRowFullWidth,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timeInput: timeInput,
    timeInputFocused: {
        ...timeInput,
        borderBottomColor: colors.primary_variant
    },
    getTaskButton: {
        ...basicButton,
        width: 275,
        backgroundColor: colors.primary
    },
    getTaskButtonPressed: {
        ...basicButton,
        width: 275,
        backgroundColor: colors.primary_variant
    },
    bigTask: {
        //borderRadius: '5%',
        borderRadius: .05,
        padding: '2%',
        //marginBottom: '2%',
        marginBottom: .02,
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        width: 300,
        height: '30%',
        shadowColor: '#111',
        shadowOffset: {width: 5, height: -5},
        shadowRadius: 1,
        shadowOpacity: .75,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: colors.accent_a,
        borderWidth: 1,
        borderRadius: 15
    },
    taskDisplay: {
        ...text_large_a,
        padding: 10,
        textAlign: 'center'
    },
})

export default taskSelectorStyles;