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

  //background: linear-gradient(to top, #2F80ED, #56CCF2);
  

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
    xlarge: '40'
}

const styles = StyleSheet.create({
    homeContainer: {
        display: 'flex',
        backgroundColor: colors.primary,
        alignItems: 'center',
        height: '100%'
    },
    text: {
        color: colors.white,
        fontSize: fontSizes.medium
    },
    bigText: {
        color: colors.white,
        fontSize: fontSizes.large
    },
    basicButton: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5%',
        backgroundColor: colors.action,
        color: colors.white,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        width: '100%'
    },
    basicButtonDisabled: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5%',
        backgroundColor: colors.disabled,
        color: colors.white,
        padding: 20,
        marginTop: 20,
        marginBottom: 20,
        width: '100%'
    },
    // NavBar
    navbar: {
        position: 'absolute',
        bottom: 0,
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
        color: colors.white,
        display: 'flex',
        'alignSelf': 'flex-end'
    },
    // CreateTask
    createTaskContainer: {
        height: '100%',
        backgroundColor: colors.primary,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    createTaskForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        top: 25,
        marginLeft: 40,
        width: '75%'
    },
    taskInput: {
        height: 40,
        width: 250,
        borderColor: colors.white,
        borderWidth: 1,
        marginBottom: 25,
        borderColor: 'transparent',
        borderBottomColor: colors.action,
        color: colors.white
    },
    createTaskDropdown: {
        width: 250,
        zIndex: '2000'
    },
    // Task selector
    taskSelectorContainer: {
        display: 'flex',
        position: 'relative',
        top: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '70%',
        paddingLeft: 5,
        paddingRight: 5
    },
    timeInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    timeInput: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 80,
        borderColor: 'transparent',
        borderBottomColor: colors.action,
        backgroundColor: colors.primary,
        color: colors.white,
        textAlign: 'center',
        fontSize: fontSizes.large
    },
    bigTask: {
        borderWidth: '5px',
        borderColor: colors.secondary,
        borderRadius: '5%',
        padding: '2%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        width: 300,
        height: '30%',
        shadowColor: '#111',
        shadowOffset: {width: 5, height: -5},
        shadowRadius: '1px',
        shadowOpacity: '.75',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    taskDisplay: {
        fontSize: fontSizes.large,
        color: colors.white,
        padding: 10,
        textAlign: 'center'
    },
    // TaskList
    taskListContainer: {
        backgroundColor: colors.primary,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        bottom: 10,
        top: 0
    },
    task: {
        borderWidth: '5px',
        borderColor: colors.secondary,
        borderRadius: '5%',
        padding: '2%',
        marginBottom: '2%',
        alignSelf: 'center',
        backgroundColor: colors.secondary,
        width: '85%',
        shadowColor: '#111',
        shadowOffset: {width: 5, height: -5},
        shadowRadius: '1px',
        shadowOpacity: '.75'
    },
    taskText: {
        color: colors.white,
    },
    taskTextBold: {
        color: colors.white,
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
        color: colors.white,
        fontSize: fontSizes.xlarge
    },
    // Misc
    adBanner: {
        width: 320,
        height: 50,
        borderWidth: '1px',
        borderStyle: "dashed",
        borderColor: colors.white
    }
})

export default styles;