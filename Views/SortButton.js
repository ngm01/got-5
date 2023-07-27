import { Alert, Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import basicStyles from '../styles/basicStyles';
import sortButtonStyles from "../styles/sortButtonStyles";

function SortButton({ sortType }) {

    const testPress = () => {
        Alert.alert("This works")
    }

    return ( 
        <Pressable onPress={testPress} style={sortButtonStyles.buttonContainer}>
            <Text style={basicStyles.textSmallWhite}>{sortType}</Text>
            <View style={sortButtonStyles.icons}>
                <View>
                    <FontAwesomeIcon style={sortButtonStyles.icon_selected} size={25} icon={faSortUp} />
                    <FontAwesomeIcon style={sortButtonStyles.icon} size={25} icon={faSortDown} />
                </View>
            </View>
        </Pressable>
     );
}

export default SortButton;