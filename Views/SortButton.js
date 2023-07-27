import { Alert, Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import basicStyles from '../styles/basicStyles';
import sortButtonStyles from "../styles/sortButtonStyles";

function SortButton({ sortAscending }) {

    return ( 
        <Pressable style={sortButtonStyles.buttonContainer}>
            <View style={sortButtonStyles.icons}>
                    <FontAwesomeIcon style={sortAscending ? sortButtonStyles.icon_selected : sortButtonStyles.icon} size={25} icon={faSortUp} />
                    <FontAwesomeIcon style={sortAscending ? sortButtonStyles.icon : sortButtonStyles.icon_selected} size={25} icon={faSortDown} />
            </View>
        </Pressable>
     );
}

export default SortButton;