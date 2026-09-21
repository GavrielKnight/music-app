import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { imagenes } from "./imagenes.js";
import styles from "./styles.js";

export default function SongCard({ song }) {
    return (
        <View>
            <Pressable onPress={() => router.push("/playing?id=" + song.id)}>
                <Image
                    source={imagenes[song.thumbnail]}
                    style={styles.songThumbnail}
                />
                <Text>{song.titulo}</Text>
                <Text>{song.artista}</Text>
            </Pressable>
        </View>
    );
}