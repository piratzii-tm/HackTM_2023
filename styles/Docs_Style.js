import {StyleSheet} from "react-native";

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
        borderColor: "#A9A9A9",
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
        backgroundColor: "#78ff69",
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
        backgroundColor: "#70c468",
        borderRadius: 10,

    },
});

export {Docs_Style}