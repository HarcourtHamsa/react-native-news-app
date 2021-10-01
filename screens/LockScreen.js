import React from "react";
import { View, StyleSheet, Text, StatusBar, Image } from "react-native";
import CustomKeyboard from "../components/CustomKeyboard";
import Screen from "../components/Screen";
import { Ionicons } from "@expo/vector-icons";

const lockIcon = require("../assets/images/icons8-lock-50.png");

const LockScreen = () => {
  const [cst, fns] = React.useState({
    pinOne: "",
    pinTwo: "",
    pinThree: "",
    pinFour: "",
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topHalf}>
        <View style={styles.topHalfOne}>
          <Image source={lockIcon} style={{ tintColor: "white" }} />
          <Text
            style={{
              fontSize: 25,
              marginTop: 10,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Unlock Note
          </Text>
        </View>
        <View style={styles.topHalfTwo}>
          <Screen
            pinOne={cst.pinOne}
            pinTwo={cst.pinTwo}
            pinThree={cst.pinThree}
            pinFour={cst.pinFour}
          />
        </View>
      </View>
      <View style={styles.bottomHalf}>
        <CustomKeyboard fns={fns} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161616",
  },
  topHalf: {
    flex: 1,
  },
  topHalfOne: {
    flex: 2,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
  },
  topHalfTwo: {
    flex: 2,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
  },
  bottomHalf: {
    flex: 1,
  },
});

export default LockScreen;
