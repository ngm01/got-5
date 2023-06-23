import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faListCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles';

export default function NavBar({current}) {
    const navigation= useNavigation();
    return (
        <View style={styles.navbar}>
            <Pressable style={(current === 'home' ? styles.selectedNavbar : styles.navbarButton)} onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon size={32} style={(current === 'home' ? styles.navbarIconSelected : styles.navbarIcon)} icon={faHome} />
            </Pressable>
            <Pressable style={(current === 'create' ? styles.selectedNavbar : styles.navbarButton)} onPress={() => navigation.navigate('CreateTask')}>
                <FontAwesomeIcon size={32} style={(current === 'create' ? styles.navbarIconSelected : styles.navbarIcon)} icon={faCirclePlus} />
            </Pressable>
            <Pressable style={(current === 'list' ? styles.selectedNavbar : styles.navbarButton)} onPress={() => navigation.navigate('TaskList')}>
                <FontAwesomeIcon size={32} style={(current === 'list' ? styles.navbarIconSelected : styles.navbarIcon)} icon={faListCheck} />
            </Pressable>
        </View>
    )
}