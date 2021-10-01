import React from "react";
import { MdHome } from "react-icons/md";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS, FONTS } from "../constants";
import Icon from "@expo/vector-icons/build/MaterialCommunityIcons";

const TabIcon = ({ label, icon, focused }) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} color={focused ? "white" : COLORS.transparentWhite} />
      <Text style={styles.label(focused)}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: (focused) => ({
    fontWeight: "bold",
    color: focused ? "white" : COLORS.transparentWhite,
    ...FONTS.h3
  }),
  add: {
    backgroundColor: "blue",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    position: "relative",
    padding: 5,
    top: -40,
  },
});

export default TabIcon;
