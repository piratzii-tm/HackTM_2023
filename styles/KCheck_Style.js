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
        flex: 1,
    },

    image: {
        width:"100%",
        height:"100%",
        borderRadius: 10,
    },

    rightContainer: {
        flex: 4,
        padding: 10,
        justifyContent: "space-evenly",
    },
});

export {KCheck_Style}