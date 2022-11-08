
import {View,Text} from "react-native";
import div from '../components/ComponentCss';
import data from "../components/dummyData";
import FoodItem from "../components/FoodItem";

function Foods(){
    
    return(
            <View style={div.foodScreen}>
                <Text style={div.defaultTextStyle}>Food screen hey</Text>
                {data.map((item)=><FoodItem key={item.id} data={item}/>)}
            </View>
    );
}

export default Foods;
