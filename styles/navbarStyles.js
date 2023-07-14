import { StyleSheet } from "react-native";
import { colors, flexRowFullWidth } from "./baseStyleDefinitions";

const navbarStyles = StyleSheet.create({
    navbar: {
        ...flexRowFullWidth,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        backgroundColor: colors.action
    },
    navbarButton: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.action,
        paddingVertical: 35,
        paddingHorizontal: 50,
    },
    selectedNavbar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.selected,
        paddingVertical: 35,
        paddingHorizontal: 50,
    },
    navbarIcon: {
        color: colors.primary,
        display: 'flex',
        'alignSelf': 'flex-end'
    },
    navbarIconSelected: {
        color: colors.white,
        display: 'flex',
        'alignSelf': 'flex-end'
    }
})

export default navbarStyles;