import { Pressable, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faListCheck, faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles';

export default function NavBar() {
    const navigation= useNavigation();
    return (
        <View style={styles.navbar}>
            <Pressable style={styles.basicButton} onPress={() => navigation.navigate('Home')}>
                <FontAwesomeIcon size={32} icon={faHome} style={styles.navbarButton} />
            </Pressable>
            <Pressable style={styles.basicButton} onPress={() => navigation.navigate('CreateTask')}>
                <FontAwesomeIcon size={32} style={styles.navbarButton} icon={faCirclePlus} />
            </Pressable>
            <Pressable style={styles.basicButton} onPress={() => navigation.navigate('TaskList')}>
                <FontAwesomeIcon size={32} style={styles.navbarButton} icon={faListCheck} />
            </Pressable>
        </View>
    )
}