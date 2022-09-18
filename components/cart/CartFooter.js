import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

const CartFooter = ({ total, amount }) => {
  return (
    <View style={styles.CartFooter}>
      <View style={styles.row}>
        <Text style={styles.text}>Total Items:</Text>
        <Text style={styles.text2}>{amount}</Text>
      </View>
      <View style={styles.divider}></View>
      <View style={styles.row}>
        <Text style={styles.text}>Total Price:</Text>
        <Text style={styles.text2}>{`$ ${total}`}</Text>
      </View>
    </View>
  );
};

export default CartFooter;

const styles = StyleSheet.create({
  CartFooter: {
    height: 80,
    width: "100%",
    backgroundColor: GlobalStyles.colors.primary100,
    borderWidth: 1,
    borderColor: GlobalStyles.colors.primary500,
    // marginLeft: "10%",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: "space-around",
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: GlobalStyles.colors.primary200,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text2: {
    fontWeight: "bold",
  },
});
