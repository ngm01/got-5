import { StyleSheet } from "react-native";
import { 
    colors, 
    colors_dark, 
    basicButton, 
    smallOnPrimary,
    smallOnSecondary, 
    smallOnVariant,
    smallBoldOnPrimary, 
    smallBoldOnSecondary,
    smallBoldOnVariant,
    mediumOnPrimary, 
    largeOnPrimary, 
    largeOnSecondary, 
    largeOnVariant,
    largeOnBackground,
    mediumOnSecondary,
    xxLargeOnPrimary,
    xxLargeOnSecondary} from "./baseStyleDefinitions";

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
    smallOnPrimary: smallOnPrimary,
    smallonSecondary: smallOnSecondary,
    smallOnVariant: smallOnVariant,
    smallBoldOnPrimary: smallBoldOnPrimary,
    smallBoldOnSecondary: smallBoldOnSecondary,
    smallBoldOnVariant: smallBoldOnVariant,
    mediumOnPrimary: mediumOnPrimary,
    mediumOnSecondary: mediumOnSecondary,
    largeOnPrimary: largeOnPrimary,
    largeOnSecondary: largeOnSecondary,
    largeOnVariant: largeOnVariant,
    largeOnBackground, largeOnBackground,
    xxLargeOnPrimary: xxLargeOnPrimary,
    xxLargeOnSecondary: xxLargeOnSecondary,
    adBanner: {
        width: 320,
        height: 50,
        borderWidth: '1px',
        borderStyle: "dashed",
        borderColor: colors_dark.on_background
    }
})

export default basicStyles;