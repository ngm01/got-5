import { StyleSheet } from "react-native";
import { 
    colors,
    basicButton, 
    text_small_primary,
    text_medium_primary,
    text_large_primary,
    text_xlarge_primary,
    text_xxlarge_primary,
    text_small_secondary,
    text_medium_secondary,
    text_large_secondary,
    text_xlarge_secondary,
    text_xxlarge_secondary
} from "./baseStyleDefinitions";

const basicStyles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
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
    textSmallPrimary: text_small_primary,
    textMediumPrimary: text_medium_primary,
    textLargePrimary: text_large_primary,
    textXLargePrimary: text_xlarge_primary,
    textXXLargePrimary: text_xxlarge_primary,
    textSmallSecondary: text_small_secondary,
    textMediumSecondary: text_medium_secondary,
    textLargeSecondary: text_large_secondary,
    textXLargeSecondary: text_xlarge_secondary,
    textXXLargeSecondary: text_xxlarge_secondary,
    adBanner: {
        width: 320,
        height: 50,
        borderWidth: '1px',
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