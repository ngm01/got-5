export const colors = {
    primary: '#011627',
    secondary: '#314c61',
    white: '#ece8ef',
    black: '#111',
    action: '#fb4d3d',
    selected: '#f77468',
    disabled: 'gray'
  }

export const fontSizes = {
    small: '10',
    medium: '18',
    large: '30',
    xlarge: '40',
    xxlarge: '60'
}

export const smallText = {
    color: colors.white,
    fontSizes: fontSizes.small
}

export const smallTextBold = {
    ...smallText,
    fontWeight: 'bold'
}

export const text = {
    color: colors.white,
    fontSize: fontSizes.medium
}

export const largeText = {
    color: colors.white,
    fontSize: fontSizes.large
}

export const xLargeText = {
    color: colors.white,
    fontSize: fontSizes.xlarge
}

export const xxLargeText = {
    color: colors.white,
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