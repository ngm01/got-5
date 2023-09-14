import { StyleSheet } from "react-native";
import { 
    colors,
    basicButton, 
    text_small_a,
    text_medium_a,
    text_large_a,
    text_xlarge_a,
    text_xxlarge_a,
    text_small_b,
    text_medium_b,
    text_large_b,
    text_xlarge_b,
    text_xxlarge_b,
    text_small_primary
} from "./baseStyleDefinitions";

const basicStyles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: colors.background
    },
    settingsContainer: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.background
    },
    basicButton: {
        ...basicButton,
        backgroundColor: colors.primary
    },
    basicButtonPressed: {
        ...basicButton,
        backgroundColor: colors.primary_variant
    },
    basicButtonDisabled: {
        ...basicButton,
        backgroundColor: colors.background
    },
    textSmallA: text_small_a,
    textMediumA: text_medium_a,
    textLargeA: text_large_a,
    textXLargeA: text_xlarge_a,
    textXXLargeA: text_xxlarge_a,
    textSmallB: text_small_b,
    textMediumB: text_medium_b,
    textLargeB: text_large_b,
    textXLargeB: text_xlarge_b,
    textXXLargeB: text_xxlarge_b,
    textSmallPrimary: text_small_primary,
    adBanner: {
        width: 320,
        height: 50,
        borderWidth: 1,
        borderStyle: "dashed",
        borderColor: colors.accent_a
    },
    dividerPipe: {
        backgroundColor: colors.accent_a,
        width: 1,
        height: 50,
        marginHorizontal: 5
    }
})

export default basicStyles;