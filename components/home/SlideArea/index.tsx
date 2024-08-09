import Common from "@/constants/constants";
import globalStyles from "@/styles/global";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import SlideAreaCard from "./SlideAreaCard";

export default function SlideArea() {

    return <View style={styles.slideArea}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.header, globalStyles.safeArea]}>
                <View style={[styles.headerItem, styles.headerItemActive]}>
                    <Text style={[globalStyles.p, styles.headerItemActiveText]}>Popular</Text>
                </View>
                <View style={styles.headerItem}>
                    <Text style={globalStyles.p}>Recommended</Text>
                </View>
                <View style={styles.headerItem}>
                    <Text style={globalStyles.p}>Most visited</Text>
                </View>
            </View>
        </ScrollView>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={[styles.cardHolder, globalStyles.safeArea]}>
                <SlideAreaCard img={require("@/assets/images/home/img1.png")} />
                <SlideAreaCard img={require("@/assets/images/home/img2.png")} />
                <SlideAreaCard img={require("@/assets/images/home/img1.png")} />
                <SlideAreaCard img={require("@/assets/images/home/img2.png")} />
            </View>

        </ScrollView>
    </View>

}


const styles = StyleSheet.create({
    slideArea: {

    },
    header: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
        gap: 10,
    },
    headerItem: {
        height: 50,
        backgroundColor: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        paddingHorizontal: 25,
        flexDirection: "row",
        borderRadius: Common.radius3
    },
    headerItemActive: {
        backgroundColor: "#2F2F2F",
    },
    headerItemActiveText: {
        color: "white"
    },
    cardHolder: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        gap: 20,
    }
})