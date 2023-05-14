import {StyleSheet} from "react-native";

const KNotif_Style = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        width:"90%",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent:"space-evenly"
    },

    imageContainer:{
        alignItems:"center",
        justifyContent:"center"
    },

    image:{
        height:80,
        width:80
    },
    desc:{
        justifyContent:"center"
    }

});

export {KNotif_Style}