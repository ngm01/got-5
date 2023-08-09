import { StyleSheet } from "react-native";
import { colors, colors_dark, colors_light } from "./baseStyleDefinitions";

const taskInput = {
    height: 40,
    width: 250,
    borderColor: colors_dark.accent_a,
    borderWidth: 1,
    marginBottom: 25,
    borderColor: 'transparent',
    color: colors.white
}

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
        padding: 10,
        backgroundColor: colors_dark.surface,
        borderColor: colors_dark.accent_a,
        borderWidth: 1,
        borderRadius: 10
    },
    taskInput: {
        ...taskInput,
        borderBottomColor: colors_dark.secondary,
    },
    taskInputFocused: {
        ...taskInput,
        borderBottomColor: colors_dark.primary
    },
    createTaskDropdownContainer: {
        zIndex: '2000'
    },
    createTaskDropdown: {
        width: 250
    }
})

export default createTaskStyles;