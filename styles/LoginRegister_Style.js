import {StyleSheet} from "react-native";

export const IfSignIn = function (options){
    return {
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }
}

export const IfRegister = function (options){
    return {
        flex: 1,
        padding: 10,
        backgroundColor: "#E8E8E8",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    }
}

export const TextSignIn = function (options){
    return {
        color: "#123dff",
        fontSize: 16,
    }
}
export const TextRegister = function (options){
    return {
        color: "black",
        fontSize: 16,
    }
}

const LoginRegister_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },

    up: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },

    down: {
        flex: 1.3,
        justifyContent: "flex-start",
        width: "100%",
    },

    sign_reg_container: {
        padding: 3,
        height: 60,
        width: "95%",
        backgroundColor: "#E8E8E8",
        alignSelf: "center",
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },

    textInputContainer: {
        height: 90,
        width: "100%",
        padding: 10,
        flexDirection: "column",
    },

    text: {
        fontSize: 18,
    },

    saveButton: {
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        height: 50,
        width: "90%",
        backgroundColor: "#123dff",
        borderRadius: 10,

    },

    textInput: {
        borderWidth: 1,
        borderColor: "#A9A9A9",
        borderRadius: 10,
        height: 45,
        padding: 10,
    },


});

export {LoginRegister_Style}