import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "@expo/vector-icons/build/MaterialCommunityIcons";
import Box from "../components/Box";
import { FONTS, SIZES } from "../constants";

const Bookmark = () => {
  return (
    <View style={styles.screen}>
      <Box>
        <Text
          style={{ ...FONTS.h2, color: "tomato", marginBottom: SIZES.margin }}
        >
          Bookmarks
        </Text>
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ ...FONTS.h3, color: "gray" }}>
                12:45 | 05.11.2021
              </Text>
              <Text style={{ ...FONTS.h3, color: "tomato" }}>Business</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
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
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ ...FONTS.h3, color: "gray" }}>
                12:45 | 05.11.2021
              </Text>
              <Text style={{ ...FONTS.h3, color: "tomato" }}>Business</Text>
            </View>
          </View>
        </View>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Bookmark;
