import {StyleSheet} from "react-native";
import {BG, GREEN} from "./ColorManager";

const Docs_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    uploadContainer:{
        flexDirection:"column",
        gap:10,
        alignItems:"center",
        width:"60%"
    },
    textInput: {
        borderWidth: 1,
        borderColor: BG,
        borderRadius: 10,
        height: 50,
        padding: 10,
        width:"70%"
    },
    uploadBtn: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: "40%",
        backgroundColor: GREEN,
        borderRadius: 10,

    },
    oneLiner:{
        flexDirection:"row",
        gap:10
    },
    addBtn: {
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: "50%",
        backgroundColor: GREEN,
        borderRadius: 10,

    },
});

export {Docs_Style}