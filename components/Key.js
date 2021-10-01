import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Key = ({ label, isBackspace, onKeyPress }) => {
  const [isActive, setIsActive] = React.useState(false);

  const onActive = () => {
    onKeyPress();
    setIsActive(!isActive);
  };

  const onInActive = () => {
    setIsActive(!isActive);
  };

  return (
    <Pressable
      style={styles.key(isActive)}
      onPressIn={() => onActive()}
      onPressOut={() => onInActive()}
    >
      {isBackspace ? (
        <Ionicons name="ios-backspace" size={30} color="white" />
      ) : (
        <Text style={styles.label(isActive)}>{label}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  key: (isActive) => ({
    width: "30%",
    backgroundColor: isActive ? "#222831" : null,
    height: 80,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  }),
  label: (isActive) => ({
    fontWeight: "bold",
    fontSize: 20,
    color: isActive ? "grey" : "white",
  }),
});

export default Key;
