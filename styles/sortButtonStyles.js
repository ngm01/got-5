import { StyleSheet } from "react-native";
import { colors } from "./baseStyleDefinitions";

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
        backgroundColor: colors.surface,
        borderColor: colors.accent_a,
        borderWidth: 1,
        borderRadius: 5

    },
    icons: {
        display: 'flex'
    },
    icon: {
        ...icon,
        color: colors.secondary,
    },
    icon_selected: {
        ...icon,
        color: colors.primary,
    }

})

export default sortButtonStyles;