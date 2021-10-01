import React from "react";
import Box from "../components/Box";
import { View } from "../components/Themed";
import { COLORS, FONTS, SIZES } from "../constants";
import Icon from "@expo/vector-icons/build/MaterialCommunityIcons";
import { TextInput } from "react-native-gesture-handler";

const Budget = () => {
  return (
    <View style={{ flex: 1 }}>
      <Box>
        <View
          style={{
            backgroundColor: COLORS.lightGray2,
            height: 50,
            elevation: 10,
            borderRadius: SIZES.base,
            flexDirection: "row",
            alignItems: 'center',
            paddingHorizontal: SIZES.base
          }}
        >
          <Icon name="magnify" size={30} color="gray" />
          <TextInput
            placeholder="Search"
            style={{ ...FONTS.h3, color: "white", flex: 1 }}
            placeholderTextColor={"gray"}
          />
        </View>
      </Box>
    </View>
  );
};

export default Budget;
