import { StyleSheet, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const IconButton = ({ icon, color, onPress, size }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <FontAwesome name={icon} size={size ? size : 18} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
