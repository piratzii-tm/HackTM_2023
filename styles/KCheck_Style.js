import {StyleSheet} from "react-native";

const KCheck_Style = StyleSheet.create({
    container: {
        flex: 1,
        height: 90,
        width:"100%",
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",
    },
    imageContainer: {
        flex: 1.5,
    },

    image: {
        width:"100%",
        height:"100%",
        borderRadius: 10,
    },

    midContainer: {
        flex: 4,
        padding: 10,
        justifyContent: "space-evenly",
    },

    rightContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export {KCheck_Style}