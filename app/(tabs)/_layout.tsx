import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";


export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2F2F2F",
        tabBarInactiveTintColor: "#848282",
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign size={28} name="home" color={color} />
          ),
          // tabBarBadge: "",
          // tabBarBadgeStyle: styles.tabBarBadgeStyle,
        }}
      />

      <Tabs.Screen
        name="recent"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name="clockcircleo" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name="hearto" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign size={24} name="user" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    bottom: 10,
    elevation: 0,
    backgroundColor: "transparent",
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
