import {StyleSheet} from "react-native";
import {BG} from "./ColorManager";

const Results_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
    },

    header: {
        flex: 0.5,
        height: 100,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white"
    },

    headerLeft: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    headerMid: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
    },

    bodyContainer: {
        flex: 4,
        padding: 10,
    },

    componenta: {
        height: 90,
        width:"100%",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
    },

    imageContainer: {
        flex: 1.5,
        padding: 5,
        justifyContent:"center",
        alignItems:"center",
    },

    image: {
        width:"80%",
        height:"80%",
        borderRadius: 10,
        resizeMode:"contain",
    },

    midContainer: {
        flex: 3,
        //padding: 10,
        justifyContent: "space-evenly",
    },

    rightContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    infoContainer: {
        height: 100,
        width: "100%",
        padding: 10,
        alignSelf: "center",
        justifyContent: "center",

        backgroundColor: "#ffe6cc",
        borderRadius: 10,
    },
})

export {Results_Style}