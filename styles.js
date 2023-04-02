import { StyleSheet} from 'react-native';

  /*
  provisional colors:
  background: #011627
  buttons: #fb4d3d
  white text: #ece8ef
  blue highlight: #3581b8
  green highlight: #538083
  */

const styles = StyleSheet.create({
    homeContainer: {
        flex: '1',
        display: 'flex',
        backgroundColor: '#011627',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text: {
        color: '#ece8ef',
    }
})

export default styles;