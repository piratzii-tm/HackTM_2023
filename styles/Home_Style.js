import {StyleSheet} from "react-native";

const Home_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#D3D3D3",
        alignItems: 'center',
        justifyContent: 'center',
    },
    upContainer: {
        flex: 1,
        padding:10,
        width: "100%",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        backgroundColor: "white",
        flexDirection: "row",
    },

    avatar: {
        flex: 1.2,
        width: "100%",
    },

    avatarImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        borderRadius: 20,
    },

    upMidContainer: {
        flex: 3,
        padding: 10,
        justifyContent: "center",
        alignItems: "flex-start",
    },

    upRightContainer: {
        flex: 0.5,
    },

    downContainer: {
        flex: 5,
        width: "100%",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#D3D3D3",
    },

    subTitleText: {
        fontSize: 16,
    },

    scrollContainer: {
        width: "100%",
    }

});

export {Home_Style}