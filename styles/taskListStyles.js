import { StyleSheet } from "react-native";
import { colors, colors_dark } from "./baseStyleDefinitions";

const taskListStyles = StyleSheet.create({
    taskListContainer: {
        backgroundColor: colors_dark.background,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    sortBar: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10,
        padding: 5,
        zIndex: 2000,
        borderBottomColor: colors_dark.secondary,
        borderBottomWidth: 1
    },
    task: {
        borderWidth: 1,
        borderColor: colors_dark.white,
        borderRadius: '5%',
        padding: '2%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: colors_dark.surface,
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
        marginTop: '5%',
        marginBottom: '3%'
    },
    emptyList: {
        display: 'flex',
        alignItems: 'center',
        margin: 10
    }
})

export default taskListStyles;