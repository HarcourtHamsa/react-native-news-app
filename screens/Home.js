import React from "react";
import { View, Modal, StyleSheet, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Box from "../components/Box";
import { COLORS, FONTS, icons, SIZES } from "../constants";
import Icon from "@expo/vector-icons/build/MaterialCommunityIcons";

import news1 from "../assets/images/news-1.jpeg";
import news2 from "../assets/images/news-2.jpeg";

export default function Add() {
  return (
    <View style={styles.screen}>
      <Box>
        <Text
          style={{ ...FONTS.h2, marginBottom: SIZES.base, color: "tomato" }}
        >
          Popular News
        </Text>
        <View style={{ height: 150 }}>
          <ScrollView
            horizontal={true}
            style={{ flex: 1 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              style={{
                height: "100%",
                width: SIZES.width - 100,
                flex: 1,
                marginRight: SIZES.margin,
                flexDirection: "row",
                position: "relative",
              }}
            >
              <Image
                source={news1}
                resizeMode="cover"
                style={{ width: null, height: null, flex: 1 }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.transparentBlack1,
                  height: "100%",
                  padding: SIZES.base,
                  justifyContent: "space-between",
                  position: "absolute",
                  left: 0,
                  right: 0,
                }}
              >
                <Text style={{ ...FONTS.h4, color: "white" }}>
                  2 minutes ago
                </Text>
                <Text
                  style={{ ...FONTS.h3, color: "white" }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  An ODE: To The Before Times
                </Text>
              </View>
            </View>
            <View
              style={{
                height: "100%",
                width: SIZES.width - 100,
                flex: 1,
                marginRight: SIZES.margin,
                flexDirection: "row",
                position: "relative",
              }}
            >
              <Image
                source={news2}
                resizeMode="cover"
                style={{ width: null, height: null, flex: 1 }}
              />
              <View
                style={{
                  flex: 1,
                  backgroundColor: COLORS.transparentBlack1,
                  height: "100%",
                  padding: SIZES.base,
                  justifyContent: "space-between",
                  position: "absolute",
                  left: 0,
                  right: 0,
                }}
              >
                <Text style={{ ...FONTS.h4, color: "white" }}>
                  2 minutes ago
                </Text>
                <Text
                  style={{ ...FONTS.h3, color: "white" }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  2020: To The Years in Sports
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
        <Text
          style={{
            ...FONTS.h2,
            marginBottom: SIZES.base,
            marginTop: SIZES.largeTitle,
            color: "tomato",
          }}
        >
          Latest News
        </Text>
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 100,
              marginBottom: SIZES.margin,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "gray",
                height: 100,
                marginRight: SIZES.base,
                borderRadius: SIZES.base,
              }}
            ></View>
            <View
              style={{ flex: 2, height: 100, justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    ...FONTS.h3,
                    color: "white",
                    flex: 2,
                    marginRight: SIZES.base,
                  }}
                  numberOfLines={2}
                  ellipsizeMode="tail"
                >
                  Port Harcourt #EndSars Protest
                </Text>
                <Icon name={"bookmark"} size={20} color={"white"} />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ ...FONTS.h3, color: "gray" }}>
                  12:45 | 05.11.2021
                </Text>
                <Text style={{ ...FONTS.h3, color: "tomato" }}>Business</Text>
              </View>
            </View>
          </View>
        </View>
      </Box>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  top: {
    flex: 1,
    alignItems: "center",
  },
  bottom: {
    flex: 1,
  },
});
