import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";



export default function Index() {

  const insets = useSafeAreaInsets();
  return (
    <ThemedView style={{ flex: 1, paddingTop: insets.top }}>
      <ThemedText>Content is in safe area.</ThemedText>
      
    </ThemedView>
  );
}
