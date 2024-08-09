import globalStyles from "@/styles/global"
import { RenderIcon } from "icon-lib"
import { Image, Text, View, StyleSheet } from "react-native"

export default function TravelInfoImageArea({ img }: { img: any }) {
    return <View style={styles.card}>
        <Image source={img} style={styles.image} />
        <View style={styles.iconHolder}>
            <View style={styles.button}>
                <RenderIcon name="angle-left-regular" size={18} color="white" />
            </View>
            <View style={styles.button}>
                <RenderIcon name="bookmark-regular" size={18} color="white" />
            </View>
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
}

const styles = StyleSheet.create({
    iconHolder: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        left: 16,
        top: 16,
        right: 16

    },
    card: {
        marginTop: 20,
        width: "100%",
        height: 400,
        backgroundColor: "red",
        borderRadius: 30,
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 30
    },
    button: {
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
        bottom: 16,
        left: 16,
        right: 16,
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