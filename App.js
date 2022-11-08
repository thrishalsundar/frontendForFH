import {View, Keyboard,TouchableWithoutFeedback} from "react-native";
import Topm from './components/Topm';
import div from './AppCss';
import NavVer from "./components/NavVer";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Settings from "./pages/Settings";
import Foods from "./pages/Foods";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App(){

    const NavMaker=createNativeStackNavigator();
    const screenOpts={
        headerShown:false,
        animation:'fade',
    }

    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={div.app}>
                <Topm />
                <NavigationContainer>
                <NavMaker.Navigator 
                    initialRouteName="Home" 
                    screenOptions={screenOpts} 
                >
                    <NavMaker.Screen name="Home" component={Home}/>
                    <NavMaker.Screen name="Foods" component={Foods}/>
                    <NavMaker.Screen name="Restaurants" component={Restaurants}/>
                    <NavMaker.Screen name="Settings" component={Settings}/>
                    <NavMaker.Screen name="Login" component={Login} />
                    <NavMaker.Screen name="SignUp" component={SignUp} />
                </NavMaker.Navigator>
                <NavVer />
                </NavigationContainer>
            </View>
        </TouchableWithoutFeedback>
    );
}


export default App;
