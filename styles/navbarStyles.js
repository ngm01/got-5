import { StyleSheet } from "react-native";
import { colors, colors_dark, flexRowFullWidth } from "./baseStyleDefinitions";

const navbarStyles = StyleSheet.create({
    navbar: {
        ...flexRowFullWidth,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        backgroundColor: colors_dark.background
    },
    navbarButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors_dark.primary,
        paddingVertical: 35,
        paddingHorizontal: 45,
    },
    selectedNavbar: {
        display: 'flex',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors_dark.primary_variant,
        paddingVertical: 35,
        paddingHorizontal: 45,
    },
    navbarIcon: {
        color: colors_dark.background,
        display: 'flex',
        marginBottom: 8
    },
    navbarIconSelected: {
        color: colors_dark.white,
        display: 'flex',
        marginBottom: 8,
    }
})

export default navbarStyles;