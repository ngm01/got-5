import { StyleSheet } from "react-native";
import { colors } from "./baseStyleDefinitions";

const createTaskStyles = StyleSheet.create({
    createTaskContainer: {
        height: '100%',
        position: 'relative',
        backgroundColor: colors.primary
    },
    createTaskForm: {
        top: 75,
        left: 10,
        width: '95%',
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10
    },
    taskInput: {
        height: 40,
        width: 250,
        borderColor: colors.white,
        borderWidth: 1,
        marginBottom: 25,
        borderColor: 'transparent',
        borderBottomColor: colors.action,
        color: colors.white
    },
    createTaskDropdownContainer: {
        zIndex: '2000'
    },
    createTaskDropdown: {
        width: 250
    }
})

export default createTaskStyles;