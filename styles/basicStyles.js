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
    basicButtonDisabled: {
        ...basicButton,
        backgroundColor: colors.disabled
    },
    smallText: smallText,
    smallTextBold: smallTextBold,
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