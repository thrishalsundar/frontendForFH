import {StyleSheet} from "react-native";

 const div=StyleSheet.create({
     homeScreen:{
         display:'flex',
         flex:1,
         alignItems:'center',
         justifyContent:'center',
         padding:10,
     },
     defaultTextStyle:{
         color:'black',
     },
     pushDown:{
         marginBottom:10,
     },
     h1ig:{
         color:'black',
         fontSize:30,
         paddingBottom:10,
     },
    loginOpener:{
        
        width:100,
        display:'flex',
        backgroundColor:'red',
        alignItems:'center',
        padding:10,
        marginVertical:10,
        
    },
    loginPage:{
        flex:1,
        backgroundColor:'yellow',
    },
    formWrapper:{
        display:'flex',
        flex:1,
        //backgroundColor:'red',
        justifyContent:'center',
        justifyItems:'center',
        alignItems:'center',
        alignContent:"center",
    },

    loginHead:{
        //backgroundColor:'yellow',
        fontSize:40,
        marginBottom:15,
        color:'black',
    },

     loginForm:{
        alignItems:'center',
     },


    loginFields:{
        color:'black',
        borderWidth:1,
        borderColor:'black',
        width:300,
        borderRadius:12,
        paddingHorizontal:15,
        marginVertical:5,
    },

     loginButton:{
         color:'black',
         width:75,
         padding:10,
         marginTop:20,
         borderRadius:50,
         backgroundColor:'red',
         alignItems:'center',
     },

})

export default div;
