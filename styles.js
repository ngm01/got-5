import { StyleSheet} from 'react-native';

  /*
  provisional colors:
  background: #011627
  buttons: #fb4d3d
  white text: #ece8ef
  blue highlight: #3581b8
  green highlight: #538083
  */

  /*
        //visual debug border
        borderColor: 'red',
        borderStyle: 'dashed',
        borderWidth: '1px'
  */

  // react native gradient library:
  // https://github.com/react-native-linear-gradient/react-native-linear-gradientv
  // potential gradient patterns:
  // background: /linear-gradient(to top, #2F80ED, #56CCF2)',
  // background: 'linear-gradient(to right, #2c3e50, #4ca1af)',
  

export const colors = {
    primary: '#011627',
    secondary: '#314c61',
    white: '#ece8ef',
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

const styles = StyleSheet.create({
    // NavBar
    // CreateTask
    // Task selector -- DONE
    // TaskList
    // Timer screen
    // Misc
})

export default styles;