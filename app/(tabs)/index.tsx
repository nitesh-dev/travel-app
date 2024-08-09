import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SearchBox from "@/components/home/SearchBox";
import SlideArea from "@/components/home/SlideArea";
import Common from "@/constants/constants";
import globalStyles from "@/styles/global";
import { Link } from "expo-router";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";




export default function Index() {

  const insets = useSafeAreaInsets();
  return (
    <ThemedView style={{ flex: 1, paddingTop: insets.top }}>
      <ScrollView>
        <View style={globalStyles.mainScrollArea}>
          {/* <ThemedText>Content is in safe area.</ThemedText> */}
          <View style={[globalStyles.safeArea, styles.header]}>
            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
              <View>
                <Text style={[globalStyles.h1]}>Hi, David 👋</Text>
                <Text style={[globalStyles.p]}>Explore the world</Text>
              </View>
              <Image source={require('@/assets/images/profile.png')} />
            </View>


            {/* search box */}
            <View style={globalStyles.gap3}></View>
            <SearchBox />
          </View>

          {/* popular places area */}
          <View style={[styles.popularFlex, globalStyles.safeArea]}>
            <Text style={[globalStyles.h2]}>Popular places</Text>
            <Link style={globalStyles.link} href="/recent">View all</Link>
          </View>

          <SlideArea />
          <SlideArea />
          <SlideArea />
        </View>
      </ScrollView>
    </ThemedView>
  );
}



const styles = StyleSheet.create({
  header: {
    marginVertical: 10,
    marginTop: 30
  },
  popularFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center"
  }
})
