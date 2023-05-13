import {StyleSheet} from "react-native";

const PostRegister_Style = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    textInputContainer: {
        maxHeight: 90,
        minHeight: 50,
        width: "100%",
        padding: 10,
        flexDirection: "column",

    },

    textInput: {
        borderWidth: 1,
        borderColor: "#A9A9A9",
        borderRadius: 10,
        height: 45,
        padding: 10,
    },

    text: {
        fontSize: 18,
    },

    saveButton: {
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: "90%",
        backgroundColor: "#78ff69",
        borderRadius: 10,

    }


});

export {PostRegister_Style}