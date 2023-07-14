import { StyleSheet } from "react-native";
import { colors } from "./baseStyleDefinitions";

const taskListStyles = StyleSheet.create({
    taskListContainer: {
        backgroundColor: colors.primary,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        bottom: 10,
        top: 0,
    },
    taskListContainerOverlayHidden: {
        display: 'none'
    },
    taskListContainerOverlay: {
        backgroundColor: '#111',
        height: '110%',
        width: '100%',
        position: 'absolute',
        opacity: '.65',
        zIndex: '1000'
    },
    task: {
        borderWidth: '5px',
        borderColor: colors.secondary,
        borderRadius: '5%',
        padding: '2%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        width: '85%',
        shadowColor: '#111',
        shadowOffset: {width: 5, height: -5},
        shadowRadius: '1px',
        shadowOpacity: '.75'
    },
    taskText: {
        color: colors.white,
    },
    taskTextBold: {
        color: colors.white,
        fontWeight: 'bold'
    },
    taskButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: '5%'
    },
})

export default taskListStyles;