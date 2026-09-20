import { StyleSheet } from "react-native";

export default StyleSheet.create({
    title1: {
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 20,
    },
    title2: {
        fontSize: 18,
        paddingBottom: 10,
    },

    layoutBox: {
        flex: 1,
    },
    layout: {
        backgroundColor: "limegreen",
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
    },

    scrollingBox: {
        gap: 20,
        paddingBottom: 20,
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