import Common from "@/constants/constants";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

export default function SearchBox() {
    return (
        <View style={styles.searchBox}>
            <View style={styles.inputBox}>
                <Feather name="search" size={Common.font2} color="black" />
                <TextInput placeholder="Search places" style={styles.searchInput} />
            </View>
            <View style={styles.line}></View>
            <Feather name="filter" size={Common.font2} color="black" />
        </View>
    )
}



const styles = StyleSheet.create({
    searchBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: Common.radius3,
        paddingHorizontal: 20,
        height: 55,
        borderColor: "#ccc",
        borderWidth: 1,
        gap: 15
    },
    inputBox: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    }
    ,
    searchInput: {
        marginLeft: 10,
        fontSize: Common.font2,
        flex: 1,
    },
    line: {
        width: 1,
        height: 25,
        backgroundColor: "#ccc",
    }
})