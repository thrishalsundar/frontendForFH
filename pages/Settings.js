import {View,Text} from "react-native";
import div from '../components/ComponentCss';

function Settings(){
    return(
            <View style={div.restScreen}>
                <Text style={div.defaultTextStyle}>Settings screen hey</Text>
            </View>
    );
}

export default Settings;
