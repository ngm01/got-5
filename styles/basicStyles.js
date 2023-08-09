import { StyleSheet } from "react-native";
import { 
    colors, 
    colors_dark,
    colors_light, 
    basicButton, 
    text_small_white,
    text_medium_white,
    text_large_white,
    text_xlarge_white,
    text_xxlarge_white,
    text_xlarge_black,
    text_small_black,
    text_medium_black,
    text_large_black,
    text_xxlarge_black,
    text_small_primary,
} from "./baseStyleDefinitions";

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
        backgroundColor: colors_dark.background
    },
    textSmallPrimary: text_small_primary,
    textSmallWhite: text_small_white,
    textMediumWhite: text_medium_white,
    textLargeWhite: text_large_white,
    textXLargeWhite: text_xlarge_white,
    textXXLargeWhite: text_xxlarge_white,
    textSmallBlack: text_small_black,
    textMediumBlack: text_medium_black,
    textLargeBlack: text_large_black,
    textXLargeBlack: text_xlarge_black,
    textXXLargeBlack: text_xxlarge_black,
    adBanner: {
        width: 320,
        height: 50,
        borderWidth: '1px',
        borderStyle: "dashed",
        borderColor: colors_dark.accent_a
    },
    dividerPipe: {
        backgroundColor: colors_dark.accent_a,
        width: 1,
        height: 50,
        marginHorizontal: 5
    }
})

export default basicStyles;