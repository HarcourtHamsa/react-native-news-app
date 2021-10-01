/* eslint-disable prettier/prettier */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Pressable, StyleSheet, Text } from "react-native";
import { COLORS, FONTS, icons, SIZES } from "../constants";

/**
 *
 * @param {String} label
 * @param {Object} icon
 * @returns
 */

export default function Title({ icon, label, bg, onPress }) {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container(bg)}>
      <Pressable onPress={onPress ?? handleNavigation}>
        <Image source={icon ?? icons.home} style={styles.arrow} />
      </Pressable>
      <Text style={styles.label}>{label}</Text>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (bg) => ({
    paddingHorizontal: SIZES.margin,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    boderWidth: SIZES.base,
    borderColor: 'red',
    height: 70,
    backgroundColor: bg
  }),
  arrow: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
  },
  label: {
    ...FONTS.h2,
    color: COLORS.white,
    textAlign: "center",
    marginLeft: SIZES.margin,
  },
});
