import div from './ComponentCss';
import {View,Text} from 'react-native';

function Body(){
    return (
        <View style={div.body} >
            <Text style={div.demoText}> Here Goes Nothing</Text>
        </View>
    )
}

export default Body;
