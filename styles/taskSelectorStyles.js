import { StyleSheet } from "react-native";
import { colors, basicButton, flexRowFullWidth, largeText } from "./baseStyleDefinitions";

const taskSelectorStyles = StyleSheet.create({
    taskSelectorContainer: {
        display: 'flex',
        position: 'relative',
        top: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '70%',
        paddingLeft: 5,
        paddingRight: 5
    },
    timeInputContainer: {
        ...flexRowFullWidth,
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeInput: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 80,
        borderColor: 'transparent',
        borderBottomColor: colors.action,
        backgroundColor: colors.primary,
        textAlign: 'center',
        ...largeText
    },
    bigTask: {
        borderWidth: '5px',
        borderColor: colors.secondary,
        borderRadius: '5%',
        padding: '2%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        width: 300,
        height: '30%',
        shadowColor: '#111',
        shadowOffset: {width: 5, height: -5},
        shadowRadius: '1px',
        shadowOpacity: '.75',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    taskDisplay: {
        ...largeText,
        padding: 10,
        textAlign: 'center'
    },
})

export default taskSelectorStyles;