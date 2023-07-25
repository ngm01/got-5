import { StyleSheet } from "react-native";
import { colors, colors_dark, basicButton, flexRowFullWidth, largeText, largeOnBackground, text_large_white } from "./baseStyleDefinitions";

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
        borderBottomColor: colors_dark.primary,
        backgroundColor: colors_dark.surface,
        textAlign: 'center',
        ...text_large_white
    },
    bigTask: {
        // borderWidth: '5px',
        // borderColor: colors_dark.surface,
        borderRadius: '5%',
        padding: '2%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: colors_dark.surface,
        width: 300,
        height: '30%',
        shadowColor: '#111',
        shadowOffset: {width: 5, height: -5},
        shadowRadius: '1px',
        shadowOpacity: '.75',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderColor: colors_dark.white,
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