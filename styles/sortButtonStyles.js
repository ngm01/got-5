import { StyleSheet } from "react-native";
import { colors_dark, colors_light } from "./baseStyleDefinitions";

const icon = {
    marginVertical: -12
}

const sortButtonStyles = StyleSheet.create({

    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 50,
        height: 50,
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: colors_dark.surface,
        borderColor: colors_dark.accent_a,
        borderWidth: 1,
        borderRadius: 5

    },
    icons: {
        display: 'flex'
    },
    icon: {
        ...icon,
        color: colors_dark.secondary,
    },
    icon_selected: {
        ...icon,
        color: colors_dark.primary,
    }

})

export default sortButtonStyles;