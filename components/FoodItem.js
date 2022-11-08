import {View,Image,Text} from "react-native";
import div from "./ComponentCss";

function FoodItem(fata){

    const item=fata.data;
    console.log(item);

    return (
        <View style={div.foodItem} >
            <View style={div.imageContainer}>
                <Image style={div.imageContStyle} source={{uri:item.image,}} />
            </View>
            <View style={div.foodInfoContainer}>
                <Text style={div.h1ig} >{item.display_name}</Text>
                <Text style={div.defaultTextStyle} >{item.cuisine_type} , {item.category_type}</Text>
                <Text style={div.defaultTextStyle} >Rating: {item.rating}</Text>
            </View>
        </View>
    );
}

export default FoodItem;

//[
//        {
//            "id": 1,
//            "food_id": "cBiriyani@ssh@royapuram",
//            "display_name": "Chicken Biriyani",
//            "res_id": "ssh@royapuram",
//            "category_type": "Biriyanis",
//            "cuisine_type": "Indian",
//            "is_veg": 0,
//            "description": "Best in Chennai according to the developer",
//            "amount": 210,
//            "contents": "Biriyani - 1Kg, Brinjal Masala - 1 no., Onion Raitha - 1 no., Bread Halwa - 1 no.",
//            "instock": 1,
//            "rating": 0,
//            "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/asbyjuhrwvofb89kdold"
//        },
//        {
//            "id": 2,
//            "food_id": "mBiriyani@ssh@royapuram",
//            "display_name": "Mutton Biriyani",
//            "res_id": "ssh@royapuram",
//            "category_type": "Biriyanis",
//            "cuisine_type": "Indian",
//            "is_veg": 0,
//            "description": "Best in Chennai according to the developer",
//            "amount": 300,
//            "contents": "Biriyani - 1Kg, Brinjal Masala - 1 no., Onion Raitha - 1 no., Bread Halwa - 1 no.",
//            "instock": 0,
//            "rating": 0,
//            "image": "https://media-cdn.tripadvisor.com/media/photo-s/1b/f4/9f/93/mutton-biryani-at-ss.jpg"
//        }
//]
