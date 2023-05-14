import {StyleSheet} from "react-native";
import {BG, BLUE} from "./ColorManager";

const Settings_Style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: BG,
    },

    header: {
        height: 50,
        width: "100%",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
    },

    combinatie: {
        width: "100%",
        backgroundColor: "white",
    },

    minComponent: {
        height: 50,
        width: "100%",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

    },

    minComponentLeft:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"flex-start",
    },

    iconContainer: {
        height: 35,
        width: 35,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: BLUE,
    },

    logOut: {
        height: 50,
        width: "90%",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,
        alignSelf: "center",
    },

})

export {Settings_Style}