import { Image, Text, View } from "react-native";
import { imagenes } from "./imagenes.js";
import styles from "./styles.js";

export default function SongCard({ song }) {
    return (
        <View>
            <Image
                source={imagenes[song.thumbnail]}
                style={styles.songThumbnail}
            />
            <Text>{song.titulo}</Text>
            <Text>{song.artista}</Text>
        </View>
    );
}