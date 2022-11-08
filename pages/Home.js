import {View,Text,TouchableOpacity} from "react-native";
import div from '../pages/PagesCss';

function Home({ navigation }){
    console.log(navigation);
    return(
            <View style={div.homeScreen}>
                <Text >Home screen hey</Text>
                <Text style={ div.h1ig}>Under Construction! </Text>
                <Text style={div.defaultTextStyle}>You can still checkout the auth pages!</Text>
                <TouchableOpacity style={div.loginOpener} onPress={()=>navigation.navigate("Login")} >
                    <Text>Login Page</Text>
                </TouchableOpacity>
                <TouchableOpacity style={div.loginOpener} onPress={()=>navigation.navigate("SignUp")} >
                    <Text>SignUp Page</Text>
                </TouchableOpacity>

            </View>
    );
}
//onPress={()=>navigation.navigate("Login")}

export default Home;
