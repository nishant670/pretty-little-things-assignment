import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const ActionButton = ({
  icon,
  iconColor,
  text,
  buttonStyles,
  textStyles,
  pressHandler,
}) => {
  return (
    <Pressable
      android_ripple={{ color: "#fff" }}
      tyle={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      style={[styles.button, buttonStyles]}
      onPress={pressHandler}
    >
      {icon && <Ionicons name={icon} size={24} color={iconColor} />}
      <Text style={[styles.buttontext, textStyles]}>{text}</Text>
    </Pressable>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  button: {
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  buttontext: {
    fontWeight: "500",
    textTransform: "uppercase",
    fontSize: 13,
    marginLeft: 10,
  },
});
