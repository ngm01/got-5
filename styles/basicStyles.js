import { StyleSheet } from "react-native";
import { colors, basicButton, text, largeText, xxLargeText, smallText, smallTextBold } from "./baseStyleDefinitions";

const basicStyles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.primary
    },
    basicButton: {
        ...basicButton,
        backgroundColor: colors.action
    },
    basicButtonPressed: {
        ...basicButton,
        backgroundColor: colors.selected
    },
    basicButtonDisabled: {
        ...basicButton,
        backgroundColor: colors.disabled
    },
    smallText: smallText,
    smallTextBold: smallTextBold,
    smallTextDark: {
        color: colors.black,
        fontSizes: fontSizes.small
    },
    text: text,
    largeText: largeText,
    xxLargeText: xxLargeText,
    adBanner: {
        width: 320,
        height: 50,
        borderWidth: '1px',
        borderStyle: "dashed",
        borderColor: colors.white
    }
})

export default basicStyles;