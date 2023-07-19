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
        justifyContent: 'center',
        backgroundColor: colors.action,
        paddingVertical: 35,
        paddingHorizontal: 45,
    },
    selectedNavbar: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.selected,
        paddingVertical: 35,
        paddingHorizontal: 45,
    },
    navbarIcon: {
        color: colors.primary,
        display: 'flex',
        marginBottom: 8
    },
    navbarIconSelected: {
        color: colors.white,
        display: 'flex',
        marginBottom: 8,
    }
})

export default navbarStyles;