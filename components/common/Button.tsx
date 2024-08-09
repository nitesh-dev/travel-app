import Common from "@/constants/constants";
import globalStyles from "@/styles/global";
import { RenderIcon } from "icon-lib";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonType = "primary" | "secondary" | "tertiary";
type ButtonStyle = "default" | "outline" | "text";

export default function Button({ text, type, style, icon, onPress, rotate }:
    { text: string, type?: ButtonType, style?: ButtonStyle, icon?: string, onPress?: () => void, rotate?: boolean }
) {

    return <Pressable onPress={onPress}>
        <View style={styles.button}>
            <Text style={[globalStyles.h3, styles.buttonText]}>{text}</Text>
            {icon && <View style={(rotate && { transform: [{ rotateZ: rotate + "deg" }] })}>
                <RenderIcon name={icon as any} size={24} color="white" />
            </View>}
        </View>
    </Pressable>
}



const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        gap: 20,
        height: 65,
        borderRadius: 24,
        backgroundColor: "rgba(27, 27, 27, 1)",
        justifyContent: "center",
        paddingHorizontal: 20,
        width: "100%",
        alignItems: "center"
    },
    buttonText: {
        color: "white"
    }
})