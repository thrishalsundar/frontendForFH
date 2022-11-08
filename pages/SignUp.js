import {View,Text, TextInput, Pressable} from "react-native";
import div from "./PagesCss";

function SignUp(){
    function handleSignUp(){
        return;
    }
    return (
        <View style={div.loginPage} >
            <View style={div.formWrapper}>
                <Text style={div.loginHead}>SignUp</Text>
                <View style={div.loginForm}>
                    <TextInput placeholderTextColor='black' placeholder="Username or Mobile No." style={div.loginFields} />
                    <TextInput placeholderTextColor='black' placeholder="Password" secureTextEntry={true} style={div.loginFields} />
                    <TextInput placeholderTextColor='black' placeholder="Confirm Password" secureTextEntry={true} style={div.loginFields} />
                    <Pressable style={div.loginButton} onPress={handleSignUp}><Text style={{color:'white',}}>Sign Up</Text></Pressable>
                </View>
            </View>
        </View>
    );

}

export default SignUp;
