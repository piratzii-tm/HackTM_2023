import {StyleSheet} from "react-native";

const KNotif_Style = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        width:"95%",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
        justifyContent:"space-evenly",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    imageContainer:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },

    image:{
        height:40,
        width:40,
    },
    desc:{
        flex: 3,
        justifyContent:"center"
    }

});

export {KNotif_Style}