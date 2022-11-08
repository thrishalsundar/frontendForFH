
import div from '../components/ComponentCss';

import {View,Text} from "react-native";

function Restaurants({navigation}){
    return(
            <View style={div.restScreen}>
                <Text style={div.defaultTextStyle}>Restaurants screen hey</Text>
            </View>
    );
}

export default Restaurants;
