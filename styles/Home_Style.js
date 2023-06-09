import {StyleSheet} from "react-native";

const MY_BACKROUND_COLOR = "#E8E8E8";

const Home_Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: MY_BACKROUND_COLOR,
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

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
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
        alignItems: "center",
        justifyContent: "center",
    },

    downContainer: {
        flex: 5,
        width: "100%",
        padding: 10,
        paddingBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MY_BACKROUND_COLOR,
    },

    subTitleText: {
        fontSize: 16,
    },

    scrollContainer: {
        width: "100%",
    },

    dorcorsContainer: {
        flex: 2,
        width: "100%",
        padding: 10,

    },

    doctorComponent: {
        height: 100,
        width: 280,
        padding: 10,
        flexDirection: "row",
        borderRadius: 10,
        backgroundColor: "white",

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    doctorLeft: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },

    doctorRight: {
        flex: 4,
        padding: 15,
        justifyContent: "center",

    },

});

export {Home_Style}