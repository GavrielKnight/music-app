import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

export default function Layout({ children }) {

    return (
        <View style={{ flex: 1 }}>
            {/* Barra superior */}
            <View style={styles.layout}>
                <Text style={styles.title1}>Music App</Text>
            </View>

            {/* Contenido */}
            <View  style={{ flex: 1 }}>{children}</View>

            {/* Barra inferior */}
            <View style={styles.layout}>
                <Pressable onPress={() => router.push("/")}>
                    <Text style={styles.title1}>Inicio</Text>
                </Pressable>

                <Pressable onPress={() => router.push("/perfil")}>
                    <Text style={styles.title1}>Perfil</Text>
                </Pressable>

                <Pressable onPress={() => router.push("/configuracion")}>
                    <Text style={styles.title1}>Configuración</Text>
                </Pressable>
            </View>

        </View>
    );
}