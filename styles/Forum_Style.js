import {StyleSheet} from "react-native";

const MY_BACKROUND_COLOR = "#E8E8E8";

const Forum_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MY_BACKROUND_COLOR,
        width:"100%",
        height:"100%"
    },

    scrollView:{
        alignItems: 'center',
        flexDirection:"column",
        gap:15,
    },

    uploadBtn:{
        width:"90%",
        height:50,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
    },

    uploadTxt:{
        fontSize:17,
        padding:10
    },

    miniContainer:{
        width:"90%",
        alignItems:"flex-start"
    },

    grid:{
        width:"100%",
        height:300,
        flexDirection:"column",
        alignItems:"center",
        gap:1
    },
    row:{
        width:"90%",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    gridImage:{
        height:60,
        width:60,
        padding:15
    },
    gridElement:{
        height:100,
        width:"33%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"white"
    },
    saveBtn:{
        width:"90%",
        height:50,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10,
        padding:10
    }

});

export {Forum_Style}