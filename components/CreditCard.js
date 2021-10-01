import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FONTS } from "../constants";

const CreditCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.flex}>
        <Text style={{...FONTS.h3}}>
          **** {"\t"} **** {"\t"} 7547
        </Text>
        <Text>Logo</Text>
      </View>

      <View style={styles.balace}>
        <Text style={{ ...FONTS.h2}}>Balance</Text>
        <Text style={{ ...FONTS.h3}}>$4,010.50</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 30,
    marginRight: 10,
    height: 200,
    width: 340,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: "blue",
    borderRadius: 25,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  h3: {
    color: "white",
    fontSize: 20,
  },
  h2: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  balace: {
    marginTop: 30,
  },
});

export default CreditCard;
