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
    },
    homeButtons: {
        flex: '1',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    timeInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 80,
        borderColor: 'gray',
        backgroundColor: '#fff'
    },
    // TaskList
    taskList: {
        backgroundColor: '#011627',
        height: '100%'
    },
    task: {
        borderWidth: '5px',
        borderColor: '#fb4d3d',
        padding: '2%',
        marginBottom: '2%',
        backgroundColor: '#3581b8',
        width: '50%'
    },
    taskText: {
        color: '#ece8ef',
    }
})

export default styles;