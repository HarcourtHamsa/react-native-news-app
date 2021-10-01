import React from "react";
import { View, StyleSheet } from "react-native";
import Key from "./Key";

const CustomKeyboard = ({ fns }) => {
  const handleKeyPress = (val) => {
    console.log("press");
  };

  return (
    <View style={styles.keyboard}>
      <Key label="1" onKeyPress={() => handleKeyPress("1")} />
      <Key label="2" onKeyPress={() => handleKeyPress("2")} />
      <Key label="3" onKeyPress={() => handleKeyPress("3")} />
      <Key label="4" onKeyPress={() => handleKeyPress("4")} />
      <Key label="5" onKeyPress={() => handleKeyPress("5")} />
      <Key label="6" onKeyPress={() => handleKeyPress("6")} />
      <Key label="7" onKeyPress={() => handleKeyPress("7")} />
      <Key label="8" onKeyPress={() => handleKeyPress("8")} />
      <Key label="9" onKeyPress={() => handleKeyPress("9")} />
      <Key label="" />
      <Key label="0" onKeyPress={() => handleKeyPress("0")} />
      <Key isBackspace={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CustomKeyboard;
