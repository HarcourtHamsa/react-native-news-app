import React from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";

const Screen = ({ pinOne, pinTwo, pinThree, pinFour }) => {
  const screenRef = React.useRef(null);
  const screenRef2 = React.useRef(null);
  const screenRef3 = React.useRef(null);
  const screenRef4 = React.useRef(null);
  const allScreenRefs = [screenRef, screenRef2, screenRef3, screenRef4];

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder={"-"}
        ref={screenRef}
        autoFocus={true}
        returnKeyType="next"
        secureTextEntry={true}
        maxLength={1}
        style={styles.pin}
        showSoftInputOnFocus={false}
        value={pinOne}
        onChangeText={() => {
          screenRef2.current.focus();
        }}
      />
      <TextInput
        placeholder={"-"}
        maxLength={1}
        style={styles.pin}
        ref={screenRef2}
        returnKeyType="next"
        secureTextEntry={true}
        showSoftInputOnFocus={false}
        value={pinTwo}
        onChangeText={() => {
          screenRef3.current.focus();
        }}
      />
      <TextInput
        placeholder={"-"}
        maxLength={1}
        style={styles.pin}
        ref={screenRef3}
        returnKeyType="next"
        secureTextEntry={true}
        showSoftInputOnFocus={false}
        value={pinThree}
        onChangeText={() => {
          screenRef4.current.focus();
        }}
      />
      <TextInput
        placeholder={"-"}
        maxLength={1}
        style={styles.pin}
        ref={screenRef4}
        secureTextEntry={true}
        value={pinFour}
        showSoftInputOnFocus={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    height: "40%",
    width: "70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pin: {
    width: "20%",
    backgroundColor: "#222831",
    borderRadius: 20,
    textAlign: "center",
    color: "white",
  },
});

export default Screen;
