import {View,Text, TextInput, Pressable} from "react-native";
import div from "./PagesCss";

function Login(){
    function handleLogin(){
        return;
    }
    return (
        <View style={div.loginPage} >
            <View style={div.formWrapper}>
                <Text style={div.loginHead}>Login</Text>
                <View style={div.loginForm}>
                    <TextInput placeholderTextColor='black' placeholder="Username or Mobile No." style={div.loginFields} />
                    <TextInput placeholderTextColor='black' placeholder="Password" secureTextEntry={true} style={div.loginFields} />
                    <Pressable style={div.loginButton} onPress={handleLogin}><Text style={{color:'white',}}>Login</Text></Pressable>
                </View>
            </View>
        </View>
    );
}


export default Login;
