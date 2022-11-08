import {View, Image, TouchableOpacity} from 'react-native';
import div from './ComponentCss';
import homeIcon from '../assets/images/roofing.png';
import foodsIcon from '../assets/images/fastFood.png';
import restIcon from '../assets/images/restaurant.png';
import personalIcon from '../assets/images/manageHistory.png';
import {useNavigation} from '@react-navigation/native';

function NavVer(){

    const navigation=useNavigation();



    return (
        <View style={div.navver}>
            <View style={div.navIcons}>
                <TouchableOpacity onPress={()=>navigation.navigate('Home')} >
                    <Image style={div.botIcons} source={homeIcon} />
                </TouchableOpacity>
            </View>
            <View style={div.navIcons}>
                <TouchableOpacity onPress={()=>navigation.navigate('Foods')}><Image style={div.botIcons} source={foodsIcon} /></TouchableOpacity>
            </View>
            <View style={div.navIcons}>
                <TouchableOpacity onPress={()=>navigation.navigate('Restaurants')}><Image style={div.botIcons} source={restIcon} /></TouchableOpacity>
            </View>
            <View style={div.navIcons}>
                <TouchableOpacity onPress={()=>navigation.navigate('Settings')}><Image style={div.botIcons} source={personalIcon} /></TouchableOpacity>
            </View>
        </View>
    );
}

export default NavVer;
