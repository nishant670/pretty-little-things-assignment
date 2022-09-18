import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../IconButton";
import { GlobalStyles } from "../../constants/styles";

const EmptyCart = () => {
  const navigation = useNavigation();

  const startShoppingHandler = () => {
    navigation.navigate("productList");
  };
  return (
    <View style={styles.emptyCart}>
      <IconButton
        icon="shopping-cart"
        size={44}
        color={GlobalStyles.colors.primary100}
      />
      <Text style={styles.emptyCartText}>Cart is Empty</Text>
      <Pressable
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
        onPress={startShoppingHandler}
        style={styles.startShoppingButton}
      >
        <Text style={styles.startShoppingText}>Start Shopping</Text>
      </Pressable>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 15,
  },
  startShoppingButton: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: GlobalStyles.colors.primary500,
  },
  startShoppingText: {
    fontWeight: "500",
    color: GlobalStyles.colors.accent500,
  },
});
