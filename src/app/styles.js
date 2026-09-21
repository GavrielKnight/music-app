import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title1: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10,
    },
    title2: {
        fontSize: 18,
        paddingBottom: 10,
    },

    layout: {
        backgroundColor: "limegreen",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    horizontalBox: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        paddingBottom: 20,
    },
    scrollingBox: {
        gap: 20,
        paddingBottom: 20,
        alignItems: "center",
    },

    icon: {
        width: 40,
        height: 40
    },

    button: {
        backgroundColor: "lightgray",
        padding: 10,
    },

    songThumbnail: {
        width: 200,
        height: 200
    },
});