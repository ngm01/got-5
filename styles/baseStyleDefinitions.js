export const colors = {
    primary: '#011627',
    secondary: '#314c61',
    white: '#ece8ef',
    black: '#111',
    action: '#fb4d3d',
    selected: '#f77468',
    disabled: 'gray'
  }

  export const colors_dark = {
    background: '#121212',
    surface: '#424242',
    primary: '#EF9A9A',
    primary_variant: '#D32F2F',
    secondary: '#03dac6',
    on_primary: '#000',
    on_secondary: '#000',
    on_variant: '#fff',
    on_background: '#fff',
    on_surface: '#fff',
    on_error: '#000',
    disabled: '#424242',
    error: '#cf6679'
  }

  export const colors_dark_b = {
    background: '#121212',
    background_variant: '#424242',
    // 200
    primary: '#f29e9e',
    // 700
    primary_variant: '#d93935',
    // secondary: '#9ef2f2',
    secondary: '#314c61',
    primary_text: '#121212',
    secondary_text: '#ece8ef',
    white: '#ece8ef',
    disabled: '#424242',
    error: '#cf6679'
  }

export const fontSizes = {
    small: '12',
    medium: '18',
    large: '30',
    xlarge: '40',
    xxlarge: '60'
}

export const smallOnPrimary = {
    color: colors_dark.on_primary,
    fontSize: fontSizes.small
}

export const smallOnSecondary = {
    color: colors_dark.on_secondary,
    fontSize: fontSizes.small
}

export const smallOnVariant = {
    color: colors_dark.on_variant,
    fontSize: fontSizes.small
}

export const smallBoldOnPrimary = {
    ...smallOnPrimary,
    fontWeight: 'bold'
}

export const smallBoldOnSecondary = {
    ...smallOnSecondary,
    fontWeight: 'bold'
}

export const smallBoldOnVariant = {
    ...smallOnVariant,
    fontWeight: 'bold'
}

export const mediumOnPrimary = {
    color: colors_dark.on_primary,
    fontSize: fontSizes.medium
}

export const mediumOnSecondary = {
    color: colors_dark.on_secondary,
    fontSize: fontSizes.medium
}

export const largeOnPrimary = {
    color: colors_dark.on_primary,
    fontSize: fontSizes.large
}

export const largeOnSecondary = {
    color: colors_dark.on_secondary,
    fontSize: fontSizes.large
}

export const largeOnVariant = {
    color: colors_dark.on_variant,
    fontSize: fontSizes.large
}

export const largeOnBackground = {
    color: colors_dark.on_background,
    fontSize: fontSizes.large
}

export const xLargeOnPrimary = {
    color: colors_dark.on_primary,
    fontSize: fontSizes.xlarge
}

export const xLargeOnSecondary = {
    color: colors_dark.on_secondary,
    fontSize: fontSizes.xlarge
}

export const xxLargeOnPrimary = {
    color: colors_dark.on_primary,
    fontSize: fontSizes.xxlarge
}

export const xxLargeOnSecondary = {
    color: colors_dark.on_secondary,
    fontSize: fontSizes.xxlarge
}

export const basicButton = {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '5%',
    color: colors.white,
    padding: 20,
    marginTop: 20,
    marginBottom: 20
}

export const flexRowFullWidth = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
}