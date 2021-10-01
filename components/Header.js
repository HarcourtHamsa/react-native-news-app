import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../constants";

const Header = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ ...FONTS.h3 }}>{subtitle}</Text>
        <Text style={{ ...FONTS.h1 }}>{title}</Text>
      </View>

      <View style={styles.avi} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  avi: {
    width: 70,
    height: 70,
    backgroundColor: "#ddd",
    borderRadius: 50,
  },
});

export default Header;
