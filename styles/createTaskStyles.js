import { StyleSheet } from "react-native";
import { colors } from "./baseStyleDefinitions";

const taskInput = {
    height: 40,
    width: 250,
    borderColor: colors.accent_a,
    borderWidth: 1,
    marginBottom: 25,
    borderColor: 'transparent',
    color: colors.accent_a
}

const createTaskStyles = StyleSheet.create({
    createTaskContainer: {
        height: '100%',
        display: 'flex',
        position: 'relative',
        backgroundColor: colors.background
    },
    createTaskForm: {
        top: 75,
        left: 10,
        width: '95%',
        padding: 10,
        backgroundColor: colors.surface,
        borderColor: colors.accent_a,
        borderWidth: 1,
        borderRadius: 10
    },
    taskInput: {
        ...taskInput,
        borderBottomColor: colors.secondary,
    },
    taskInputFocused: {
        ...taskInput,
        borderBottomColor: colors.primary
    },
    createTaskDropdownContainer: {
        zIndex: 2000
    },
    createTaskDropdown: {
        width: 250
    }
})

export default createTaskStyles;