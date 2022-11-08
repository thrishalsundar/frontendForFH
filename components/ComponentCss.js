import { StyleSheet } from "react-native";

const div=StyleSheet.create({
    //
    //1c
    topm:{
        //backgroundColor:'yellow',
        height:60,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:2,
        borderBottomColor:'red',
    },
    topmLeft:{
        //backgroundColor:'red',
        flexDirection:'row',
    },
    menuButton:{
        paddingLeft:15,
    },
    menuButIcon:{
        height:28,
        width:28,
    },
    headText:{
        color:'black',
        paddingLeft:10,
        fontSize:20,
        fontWeight:"300",
    },

    topmRight:{

    },

    optionsIcon:{
        paddingRight:15,
    },
    optionsButIcon:{
        height:28,
        width:28,
    },









    //2c
    body:{
        flex:1,
        margin:10,
        //backgroundColor:'red',
    },
    demoText:{
        color:'black',
    },


    defaultScreen:{
        display:'flex',
        flex:1,
    },

    homeScreen:{
        display:'flex',
        flex:1,
        padding:10,
        //backgroundColor:'red',
    },

    foodScreen:{
        display:'flex',
        flex:1,
        padding:10,
        //backgroundColor:'red',
    },

    restScreen:{
        display:'flex',
        flex:1,
        padding:10,
        //backgroundColor:'red',
    },

    settingsScreen:{
        display:'flex',
        flex:1,
        padding:10,
        //backgroundColor:'red',
    },

    defaultTextStyle:{
        color:'black',
    },






    //3c
    navver:{
        //backgroundColor:'yellow',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:60,
        borderTopWidth:2,
        borderTopColor:'red',
    },
    botIcons:{
        height:35,width:35,
        //tintColor:'red',
    },
    



    foodItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:20,

        borderRadius:10,
        backgroundColor:'#a89984',
        height:150,
        margin:2,
    },
     h1ig:{
         color:'black',
         fontSize:20,
         paddingBottom:5,
     },
    imageContainer:{
        
    },
    imageContStyle:{
        borderRadius:5,
        height:100,
        width:200,
    },
    foodInfoContainer:{
        paddingLeft:5,
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },

});

export default div;
