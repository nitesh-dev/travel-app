import Common from "@/constants/constants";
import globalStyles from "@/styles/global";
import { Link } from "expo-router";
import { RenderIcon } from "icon-lib";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function SlideAreaCard({ img }: { img: any }) {


    return <Link href={"/travel-info/1"} asChild>
        <Pressable>
            <View style={styles.card}>
                <Image source={img} style={styles.image} />
                <View style={styles.button}>
                    <RenderIcon name="heart-light" size={18} color="white" />
                </View>

                <View style={styles.info}>
                    <View style={styles.infoTitle}>
                        <Text style={[globalStyles.h4, styles.infoTextColor]}>Mount FUji,</Text>
                        <Text style={[globalStyles.h4, styles.infoTextLightColor]}>Tokyo</Text>
                    </View>
                    <View style={styles.infoBar}>
                        <RenderIcon name="location-dot-regular" size={16} color="rgba(255,255,255,0.5)" />
                        <Text style={[styles.infoTextLightColor, styles.smallFont, { flex: 1 }]}>Tokyo, Japan</Text>
                        <RenderIcon name="star-regular" size={16} color="rgba(255,255,255,0.5)" />
                        <Text style={[styles.infoTextLightColor, styles.smallFont]}>4.8</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    </Link>

}



const styles = StyleSheet.create({
    card: {
        width: 230,
        height: 350,
        backgroundColor: "red",
        borderRadius: 30,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 4,
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 30
    },
    button: {
        position: "absolute",
        right: 12,
        top: 12,
        backgroundColor: "#1D1D1D66",
        height: 40,
        width: 40,
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    info: {
        position: "absolute",
        bottom: 12,
        left: 12,
        right: 12,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 20,
        gap: 12
    },
    infoTitle: {
        display: "flex",
        flexDirection: "row",
        gap: 4,
        alignItems: "center"

    },
    infoTextColor: {
        color: "white"
    },
    infoTextLightColor: {
        color: "rgba(255,255,255,0.7)"
    },
    infoBar: {
        display: "flex",
        gap: 4,
        flexDirection: "row",
        alignItems: "center"
    },
    smallFont: {
        fontSize: 14
    }
})