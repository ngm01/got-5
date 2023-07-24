import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faListCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import navbarStyles from '../styles/navbarStyles';
import basicStyles from '../styles/basicStyles';

export default function NavBar({current}) {
    const navigation = useNavigation();
    return (
        <View style={navbarStyles.navbar}>
            <Pressable style={(current === 'home' ? navbarStyles.selectedNavbar : navbarStyles.navbarButton)} onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon size={32} style={(current === 'home' ? navbarStyles.navbarIconSelected : navbarStyles.navbarIcon)} icon={faHome} />
                <Text style={current === 'home' ? basicStyles.smallOnVariant : basicStyles.smallOnPrimary}>Home</Text>
            </Pressable>
            <Pressable style={(current === 'create' ? navbarStyles.selectedNavbar : navbarStyles.navbarButton)} onPress={() => navigation.navigate('CreateTask')}>
                <FontAwesomeIcon size={32} style={(current === 'create' ? navbarStyles.navbarIconSelected : navbarStyles.navbarIcon)} icon={faCirclePlus} />
                <Text style={current === 'create' ? basicStyles.smallOnVariant : basicStyles.smallOnPrimary}>Create</Text>
            </Pressable>
            <Pressable style={(current === 'list' ? navbarStyles.selectedNavbar : navbarStyles.navbarButton)} onPress={() => navigation.navigate('TaskList')}>
                <FontAwesomeIcon size={32} style={(current === 'list' ? navbarStyles.navbarIconSelected : navbarStyles.navbarIcon)} icon={faListCheck} />
                <Text style={current === 'list' ? basicStyles.smallOnVariant : basicStyles.smallOnPrimary}>Task List</Text>
            </Pressable>
        </View>
    )
}