import { Pressable, Text, View, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faListCheck, faGear } from '@fortawesome/free-solid-svg-icons';
import navbarStyles from '../styles/navbarStyles';
import basicStyles from '../styles/basicStyles';

export default function NavBar({current}) {

    const {height, width} = useWindowDimensions();
    const iPHONE_SE = 667;

    const navigation = useNavigation();
    return (
        <View style={height <= iPHONE_SE ? navbarStyles.navbarSmallScreen : navbarStyles.navbar}>
            <Pressable style={height <= iPHONE_SE ? navbarStyles.navbarButtonSmall : navbarStyles.navbarButton} onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon size={32} style={(current === 'home' ? navbarStyles.navbarIconSelected : navbarStyles.navbarIcon)} icon={faHome} />
                <Text style={current === 'home' ? basicStyles.textSmallPrimary : basicStyles.textSmallA}>Home</Text>
            </Pressable>
            {/* <Pressable style={navbarStyles.navbarButton} onPress={() => navigation.navigate('CreateTask')}>
                <FontAwesomeIcon size={32} style={(current === 'create' ? navbarStyles.navbarIconSelected : navbarStyles.navbarIcon)} icon={faCirclePlus} />
                <Text style={current === 'create' ? basicStyles.textSmallA : basicStyles.textSmallA}>Create</Text>
            </Pressable> */}
            <Pressable style={height <= iPHONE_SE ? navbarStyles.navbarButtonSmall : navbarStyles.navbarButton} onPress={() => navigation.navigate('TaskList')}>
                <FontAwesomeIcon size={32} style={(current === 'list' ? navbarStyles.navbarIconSelected : navbarStyles.navbarIcon)} icon={faListCheck} />
                <Text style={current === 'list' ? basicStyles.textSmallPrimary : basicStyles.textSmallA}>Task List</Text>
            </Pressable>
            <Pressable style={height <= iPHONE_SE ? navbarStyles.navbarButtonSmall : navbarStyles.navbarButton} onPress={() => navigation.navigate('Settings')}>
                <FontAwesomeIcon size={32} style={(current === 'settings' ? navbarStyles.navbarIconSelected : navbarStyles.navbarIcon)} icon={faGear} />
                <Text style={current === 'settings' ? basicStyles.textSmallPrimary : basicStyles.textSmallA}>Settings</Text>
            </Pressable>
        </View>
    )
}