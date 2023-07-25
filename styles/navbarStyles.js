import { StyleSheet } from "react-native";
import { colors, colors_dark, flexRowFullWidth } from "./baseStyleDefinitions";

const navbarStyles = StyleSheet.create({
    navbar: {
        ...flexRowFullWidth,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors_dark.surface
    },
    navbarButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors_dark.surface,
        paddingVertical: 20,
        width: '33%',
        // borderStyle: 'dashed',
        // borderColor: 'blue',
        // borderWidth: 1
    },
    navbarIcon: {
        color: colors_dark.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    navbarIconSelected: {
        color: colors_dark.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    }
})

export default navbarStyles;