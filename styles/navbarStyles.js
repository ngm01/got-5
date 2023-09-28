import { StyleSheet } from "react-native";
import { colors, flexRowFullWidth } from "./baseStyleDefinitions";

const navbarStyles = StyleSheet.create({
    navbar: {
        ...flexRowFullWidth,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.surface
    },
    navbarSmallScreen: {
        ...flexRowFullWidth,
        position: 'absolute',
        height: 70,
        bottom: 0,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.surface
    },
    navbarButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surface,
        paddingVertical: 20,
        width: '33%',
        // borderStyle: 'dashed',
        // borderColor: 'blue',
        // borderWidth: 1
    },
    navbarButtonSmall: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.surface,
        width: '33%',
    },
    navbarIcon: {
        color: colors.accent_a,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8
    },
    navbarIconSelected: {
        color: colors.primary,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 8,
    }
})

export default navbarStyles;