import { StyleSheet } from "react-native";
import { colors, colors_dark } from "./baseStyleDefinitions";

const createTaskStyles = StyleSheet.create({
    createTaskContainer: {
        height: '100%',
        display: 'flex',
        position: 'relative',
        backgroundColor: colors_dark.background
    },
    createTaskForm: {
        top: 75,
        left: 10,
        width: '95%',
        backgroundColor: colors_dark.background_variant,
        padding: 10,
        borderRadius: 10
    },
    taskInput: {
        height: 40,
        width: 250,
        borderColor: colors_dark.white,
        borderWidth: 1,
        marginBottom: 25,
        borderColor: 'transparent',
        borderBottomColor: colors_dark.primary,
        color: colors_dark.white
    },
    createTaskDropdownContainer: {
        zIndex: '2000'
    },
    createTaskDropdown: {
        width: 250
    }
})

export default createTaskStyles;