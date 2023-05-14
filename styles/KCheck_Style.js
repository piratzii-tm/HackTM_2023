import {StyleSheet} from "react-native";

const KCheck_Style = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        width:"100%",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,

    },
    imageContainer: {
        flex: 1.5,
        justifyContent:"center",
        alignItems:"center"
    },

    image: {
        width:"80%",
        height:"80%",
        borderRadius: 10,
        resizeMode:"contain"
    },

    midContainer: {
        flex: 4,
        //padding: 10,
        justifyContent: "center",
    },

    rightContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export {KCheck_Style}