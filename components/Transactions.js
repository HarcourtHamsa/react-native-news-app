import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FONTS } from "../constants";

export default function Transactions() {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Text style={{ ...FONTS.h3, marginBottom: 10 }}>Transactions</Text>
        <Text style={{ ...FONTS.h3, marginBottom: 10 }}>See all</Text>
      </View>

      <View style={{ ...styles.flex, marginVertical: 10 }}>
        <View style={{ ...styles.flex, alignItems: "flex-start" }}>
          <View
            style={{
              backgroundColor: "#eee",
              width: 60,
              height: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-basket" size={35} color="grey" />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={{ ...FONTS.h3 }}>Shopping</Text>
            <Text style={{ ...FONTS.h3 }}>Fri 10AM</Text>
          </View>
        </View>
        <View>
          <Text style={{ ...FONTS.h3, color: "tomato" }}>$340.40</Text>
        </View>
      </View>
      <View style={{ ...styles.flex, marginVertical: 10 }}>
        <View style={{ ...styles.flex, alignItems: "flex-start" }}>
          <View
            style={{
              backgroundColor: "#eee",
              width: 60,
              height: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-basket" size={35} color="grey" />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={{ ...FONTS.h3 }}>Shopping</Text>
            <Text style={{ ...FONTS.h3 }}>Fri 10AM</Text>
          </View>
        </View>
        <View>
          <Text style={{ ...FONTS.h3, color: "tomato" }}>$340.40</Text>
        </View>
      </View>
      <View style={{ ...styles.flex, marginVertical: 10 }}>
        <View style={{ ...styles.flex, alignItems: "flex-start" }}>
          <View
            style={{
              backgroundColor: "#eee",
              width: 60,
              height: 60,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="ios-basket" size={35} color="grey" />
          </View>
          <View style={{ marginLeft: 12 }}>
            <Text style={{ ...FONTS.h3 }}>Shopping</Text>
            <Text style={{ ...FONTS.h3 }}>Fri 10AM</Text>
          </View>
        </View>
        <View>
          <Text style={{ ...FONTS.h3, color: "tomato" }}>$340.40</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  h3: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "space-mono",
    color: "grey",
  },

  flex: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
