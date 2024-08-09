
import { Stack, Tabs } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { RenderIcon } from 'icon-lib'






import 'react-native-get-random-values'
import { nanoid } from 'nanoid'
export default function RootLayout() {
  // console.log(nanoid(), multiply(2, 3).then((e) => console.log(e)));

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2F2F2F",
        tabBarInactiveTintColor: "#848282",
        headerShown: false,
        tabBarStyle: styles.tabBarStyle
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            // <AntDesign size={28} name="home" color={color} />
            <RenderIcon name="house-light" color={color} size={24} />

          ),
          // tabBarBadge: "",
          // tabBarBadgeStyle: styles.tabBarBadgeStyle,
        }}
      />

      <Tabs.Screen
        name="recent"
        options={{
          tabBarIcon: ({ color }) => (
            // <AntDesign size={24} name="clockcircleo" color={color} />
            <RenderIcon name="clock-light" color={color} size={24} />
            // 
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ color }) => (
            <RenderIcon size={24} name="heart-light" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <RenderIcon size={24} name="user-light" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    height: 60,
    elevation: 0,
    backgroundColor: "white",
    borderTopColor: "transparent",
  },
  tabBarBadgeStyle: {
    minWidth: 10,
    maxWidth: 10,
    minHeight: 10,
    maxHeight: 10,
    borderRadius: 10,
    top: 40,
    left: -5,
  },
});
