import {StyleSheet} from "react-native";
import {BG, GREEN} from "./ColorManager";

const Docs_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BG,
        alignItems: 'center',
    },

    header: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },

    midContainer: {
        flex: 4,
        padding: 10,
        width: "100%",
    },

    scrollContainer: {
        width: "100%",
    },

    footer: {
        flex: 0.5,
        flexDirection: "row",
        width: "100%",
        padding: 10,
        justifyContent: "space-evenly",
    },

    uploadButton: {
        height: "70%",
        width: "70%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 10,

    },




    // uploadContainer:{
    //     flexDirection:"column",
    //     gap:10,
    //     alignItems:"center",
    //     width:"60%"
    // },
    // textInput: {
    //     borderWidth: 1,
    //     borderColor: BG,
    //     borderRadius: 10,
    //     height: 50,
    //     padding: 10,
    //     width:"70%"
    // },
    // uploadBtn: {
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: 50,
    //     width: "40%",
    //     backgroundColor: GREEN,
    //     borderRadius: 10,
    //
    // },
    // oneLiner:{
    //     flexDirection:"row",
    //     gap:10
    // },
    // addBtn: {
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: 40,
    //     width: "50%",
    //     backgroundColor: GREEN,
    //     borderRadius: 10,
    //
    // },
});

export {Docs_Style}