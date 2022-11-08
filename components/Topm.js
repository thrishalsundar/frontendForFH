import {View,Text,Image} from 'react-native';
import moreVert from '../assets/images/calledVert.png';
import div from './ComponentCss';

function Topm(){
    return (
        <View style={div.topm}>
            <View style={div.topmLeft}>
                <View style={div.headText}>
                    <Text style={div.headText}>ForHomies</Text>
                </View>
            </View>
            <View style={div.topmRight} >
                <View style={div.optionsIcon} >
                    <Image style={div.optionsButIcon} source={moreVert} />
                </View>
            </View>
        </View>
    )
}

export default Topm;
//                <View style={div.menuButton}>  
//                    <Image style={div.menuButIcon} source={menoIcon} /> 
//                </View>
