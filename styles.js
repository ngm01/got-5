import { StyleSheet} from 'react-native';

  /*
  provisional colors:
  background: #011627
  buttons: #fb4d3d
  white text: #ece8ef
  blue highlight: #3581b8
  green highlight: #538083
  */

  //background: linear-gradient(to top, #2F80ED, #56CCF2);

export const colors = {
    primary: '#011627',
    secondary: '#ece8ef',
    action: '#fb4d3d',
    selected: '#f77468',
    disabled: 'gray'
  }

export const fontSizes = {
    small: '10',
    medium: '18',
    large: '30',
    xlarge: '40'
}

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%'
    },
    text: {
        color: colors.secondary,
        fontSize: fontSizes.medium
    },
    bigText: {
        color: colors.secondary,
        fontSize: fontSizes.large
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
    basicButtonDisabled: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.disabled,
        color: colors.secondary,
        padding: 20,
        marginTop: 20,
        marginBottom: 20
    },
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: colors.action
    },
    navbarButton: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.action,
        paddingVertical: 35,
        paddingHorizontal: 50,
        // marginTop: 20,
        // marginBottom: 20
    },
    selectedNavbar: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: colors.selected,
        paddingVertical: 35,
        paddingHorizontal: 50,
        // marginTop: 20,
        // marginBottom: 20
    },
    navbarIcon: {
        color: colors.primary,
        display: 'flex',
        'alignSelf': 'flex-end'
    },
    navbarIconSelected: {
        color: colors.secondary,
        display: 'flex',
        'alignSelf': 'flex-end'
    },
    taskInputComponent: {
        height: '100%',
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
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

    taskListContainer: {
        backgroundColor: colors.primary,
        height: '100%'
    },
    taskList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    task: {
        borderWidth: '5px',
        borderColor: colors.secondary,
        borderRadius: '25%',
        padding: '2%',
        marginBottom: '2%',
        backgroundColor: colors.secondary,
        width: '75%'
    },
    taskText: {
        color: colors.primary,
    },
    taskTextBold: {
        color: colors.primary,
        fontWeight: 'bold'
    },
    taskButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: '5%'
    },
    // Timer screen
    timerContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
    },
    timerButtonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    timerText: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        width: '75%',
        color: colors.secondary,
        fontSize: fontSizes.xlarge
    },
    // Misc
    adBanner: {
        width: 320,
        height: 50,
        borderWidth: '1px',
        borderStyle: "dashed",
        borderColor: colors.secondary
    }
})

export default styles;