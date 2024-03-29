export const colors_dark = {
    background: '#0e1117',
    //background: '#121212',
    //surface: '#424242',
    surface: '#171a21',
    //primary: '#f29e9e', //
    //primary: '#EF9A9A', // red
    primary: '#90CAF9', // Blue 200
    //primary_variant: '#d93935',
    //primary_variant: '#F44336', // red
    primary_variant: '#2196F3', // Blue 500
    // secondary: '#9ef2f2',
    secondary: '#314c61',
    accent_a: '#ece8ef', // white
    accent_b: '#111', // black
    white: '#ece8ef',
    error: '#cf6679'
 }

export const colors_light = {
    background: '#ece8ef',
    //background: '#121212',
    //surface: '#424242',
    surface: '#a7bbeb',
    // 200
    //primary: '#f29e9e', //
    //primary: '#EF9A9A', // red
    primary: '#3F51B5', // Blue 500
    // 700
    //primary_variant: '#d93935',
    //primary_variant: '#F44336', // red
    primary_variant: '#1976D2', // Blue 700
    // secondary: '#9ef2f2',
    secondary: '#314c61',
    accent_a: '#111', // black
    accent_b: '#ece8ef', // white
    white: '#ece8ef',
    error: '#cf6679'
}

export let colors = colors_dark;

export const fontSizes = {
    small: 14,
    medium: 18,
    large: 30,
    xlarge: 40,
    xxlarge: 60
}

export const text_small_primary = {
    color: colors.primary,
    fontSize: fontSizes.small
}

export const text_small_a = {
    color: colors.accent_a,
    fontSize: fontSizes.small
}

export const text_medium_a = {
    color: colors.accent_a,
    fontSize: fontSizes.medium
}

export const text_large_a = {
    color: colors.accent_a,
    fontSize: fontSizes.large
}

export const text_xlarge_a = {
    color: colors.accent_a,
    fontSize: fontSizes.xlarge
}

export const text_xxlarge_a = {
    color: colors.accent_a,
    fontSize: fontSizes.xxlarge
}

//

export const text_small_b = {
   color: colors.accent_b,
    fontSize: fontSizes.small
}

export const text_medium_b = {
   color: colors.accent_b,
    fontSize: fontSizes.medium
}

export const text_large_b = {
   color: colors.accent_b,
    fontSize: fontSizes.large
}

export const text_xlarge_b = {
    color: colors.accent_b,
    fontSize: fontSizes.xlarge
}

export const text_xxlarge_b = {
    color: colors.accent_b,
    fontSize: fontSizes.xxlarge
}

export const basicButton = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    // borderRadius: '5%',
    color: colors.accent_a,
    padding: 20,
    marginTop: 20,
    marginBottom: 20
}

export const flexRowFullWidth = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}