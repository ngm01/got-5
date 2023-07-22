import { StyleSheet } from "react-native";
import { colors, colors_dark, basicButton, fontSizes, text, largeText, xxLargeText, smallText, smallTextBold } from "./baseStyleDefinitions";

const basicStyles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors_dark.background
    },
    basicButton: {
        ...basicButton,
        backgroundColor: colors_dark.primary
    },
    basicButtonPressed: {
        ...basicButton,
        backgroundColor: colors_dark.primary_variant
    },
    basicButtonDisabled: {
        ...basicButton,
        backgroundColor: colors_dark.disabled
    },
    smallText: smallText,
    smallTextBold: smallTextBold,
    smallTextDark: {
        color: colors_dark.black,
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
        borderColor: colors_dark.white
    }
})

export default basicStyles;