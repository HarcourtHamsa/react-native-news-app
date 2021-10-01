import React from "react";
import { View, StyleSheet, StatusBar, ScrollView } from "react-native";
import CreditCard from "../components/CreditCard";
import Graph from "../components/Transactions";
import Header from "../components/Header";
import Box from "../components/Box";
import { COLORS } from "../constants";

const Daily = () => {
  return <Box style={styles.screen}></Box>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.prmary,
  },
});

export default Daily;
