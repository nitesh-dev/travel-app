import { ThemedView } from "@/components/ThemedView";
import Button from "@/components/common/Button";
import TravelInfoImageArea from "@/components/travel-info/ImageArea";
import Common from "@/constants/constants";
import globalStyles from "@/styles/global";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { RenderIcon } from "icon-lib";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TravelInfo() {
    const { id } = useLocalSearchParams();
    useEffect(() => {
        console.log(id)
    }, [])
    const insets = useSafeAreaInsets();
    return <ThemedView style={{ flex: 1, paddingTop: insets.top }}>
        <ScrollView>
            <View style={globalStyles.safeArea}>
                <TravelInfoImageArea img={require("@/assets/images/home/img1.png")} />
                <View style={styles.tab}>
                    <Text style={[globalStyles.h2]}>Overview</Text>
                    <Text style={[globalStyles.p, globalStyles.h4]}>Details</Text>
                </View>


                {/* tab items */}
                <View style={styles.tabContainer}>
                    <View style={styles.infoBoxContainer}>
                        <View style={styles.infoBox}>
                            <View style={styles.infoBoxIcon}>
                                <RenderIcon name="clock-solid" size={16} color="#3F3F3F" />
                            </View>
                            <Text style={[globalStyles.p]}>8 hours</Text>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoBoxIcon}>
                                <RenderIcon name="cloud-solid" size={16} color="#3F3F3F" />
                            </View>
                            <Text style={[globalStyles.p]}>23°</Text>
                        </View>

                        <View style={styles.infoBox}>
                            <View style={styles.infoBoxIcon}>
                                <RenderIcon name="star-solid" size={16} color="#3F3F3F" />
                            </View>
                            <Text style={[globalStyles.p]}>4.5</Text>
                        </View>
                    </View>

                    <View style={styles.textBox}>
                        <Text style={globalStyles.p}>
                            This vast mountain range is renowned for its remarkable diversity in terms of topography and climate.
                            It features towering peaks, active volcanoes, deep canyons, expansive plateaus, and lush valleys.
                            This vast mountain range is renowned for its remarkable diversity in terms of topography and climate.
                            It features towering peaks, active volcanoes, deep canyons, expansive plateaus, and lush valleys.
                            This vast mountain range is renowned for its remarkable diversity in terms of topography and climate.
                            It features towering peaks, active volcanoes, deep canyons, expansive plateaus, and lush valleys.
                            This vast mountain range is renowned for its remarkable diversity in terms of topography and climate.
                            It features towering peaks, active volcanoes, deep canyons, expansive plateaus, and lush valleys.
                            This vast mountain range is renowned for its remarkable diversity in terms of topography and climate.
                            It features towering peaks, active volcanoes, deep canyons, expansive plateaus, and lush valleys.
                            This vast mountain range is renowned for its remarkable diversity in terms of topography and climate.
                            It features towering peaks, active volcanoes, deep canyons, expansive plateaus, and lush valleys.
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        <View style={styles.buttonBox}>
            <LinearGradient style={styles.gradient} colors={["rgba(255,255,255, 0)", "rgba(255,255,255,0.7)", "rgba(255,255,255,1)"]}></LinearGradient>
            <Button text="Book Now" icon="paper-plane-solid" onPress={() => {console.log("clicked")}}/>
        </View>
    </ThemedView>
}




const styles = StyleSheet.create({
    tab: {
        marginTop: 30,
        marginBottom: 20,
        flexDirection: "row",
        gap: 20,
        alignItems: "flex-end"
    },
    tabContainer: {

    },
    infoBoxContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 12
    },

    infoBox: {
        alignItems: "center",
        gap: 10,
        flexDirection: "row",
    },

    infoBoxIcon: {
        width: 34,
        height: 34,
        backgroundColor: "#EDEDED",
        borderRadius: Common.radius1,
        justifyContent: "center",
        alignItems: "center"
    },
    textBox: {
        marginTop: 20,
        paddingBottom: 200
    },
    buttonBox: {
        marginTop: 20,
        position: "absolute",
        left: 20,
        right: 20,
        paddingBottom: 20,
        bottom: 0,
        backgroundColor: "white",
    },
    gradient: {
        height: 100,
        position: "absolute",
        bottom: 80,
        left: 0,
        right: 0
    }
})