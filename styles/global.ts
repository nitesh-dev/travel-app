import Common from "@/constants/constants";
import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    mainScrollArea: {
        paddingBottom: 100
    },
    safeArea: {
        marginHorizontal: Common.layoutMargin,
    },
    h1: {
        fontSize: Common.font5,
        fontWeight: 500
    },
    h2: {
        fontSize: Common.font4,
        fontWeight: 500
    },
    h3: {
        fontSize: Common.font3,
        fontWeight: 500
    },
    h4: {
        fontSize: Common.font2,
        fontWeight: 500
    },
    h5: {
        fontSize: Common.font1,
        fontWeight: 500
    },
    p: {
        fontSize: Common.font2,
        color: "#888888",
        lineHeight: Common.font2 * 1.5
    },
    gap1: {
        marginVertical: 4
    },
    gap2: {
        marginVertical: 8
    },
    gap3: {
        marginVertical: 12
    },
    link: {
        fontSize: Common.font2,
        color: "#888888",
    }
})

export default globalStyles;