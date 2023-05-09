import { StyleSheet} from 'react-native';

  /*
  provisional colors:
  background: #011627
  buttons: #fb4d3d
  white text: #ece8ef
  blue highlight: #3581b8
  green highlight: #538083
  */

export const colors = {
    primary: '#011627',
    secondary: '#ece8ef',
    action: '#fb4d3d'
  }

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'normal',
        height: '100%'
    },
    text: {
        color: colors.secondary,
    },
    homeButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    timerText: {
        display: 'flex',
        color: colors.secondary
    },
    basicButton: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.action,
        color: colors.secondary,
        padding: 20,
        marginTop: 20,
        marginBottom: 20

    },
    taskInputComponent: {
        height: '100%',
        backgroundColor: colors.primary,
    },
    taskInputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        top: 25
    },
    taskInput: {
        height: 40,
        width: 250,
        borderColor: colors.secondary,
        borderWidth: 1,
        marginBottom: 25,
        borderColor: 'transparent',
        borderBottomColor: colors.action,
        color: colors.secondary
    },
    createTaskDropdown: {
        width: 250,
        zIndex: '2000'
    },
    // Task selector
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
        borderColor: 'transparent',
        borderBottomColor: colors.action,
        backgroundColor: colors.primary,
        color: colors.secondary,
        textAlign: 'center'
    },
    // TaskList
    taskList: {
        backgroundColor: colors.primary,
        height: '100%'
    },
    task: {
        borderWidth: '5px',
        borderColor: colors.secondary,
        padding: '2%',
        marginBottom: '2%',
        backgroundColor: colors.primary,
        width: '50%'
    },
    taskText: {
        color: colors.secondary,
    }
})

export default styles;