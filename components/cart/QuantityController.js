import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../../store/cart";
import IconButton from "../IconButton";
import { GlobalStyles } from "../../constants/styles";

const QuantityController = ({ id, amount }) => {
  const dispatch = useDispatch();

  const increaseItemHandler = () => {
    dispatch(increase({ id }));
  };

  const decreaseItemHandler = () => {
    if (amount === 1) {
      return;
    }
    dispatch(decrease({ id }));
  };

  return (
    <View style={styles.conatiner}>
      <Pressable onPress={decreaseItemHandler} style={styles.box}>
        <IconButton
          icon="chevron-down"
          size={12}
          color={GlobalStyles.colors.primary500}
        />
      </Pressable>
      <View style={{ ...styles.box, borderWidth: 0, marginTop: 0 }}>
        <Text style={styles.quantity}>{amount}</Text>
      </View>
      <Pressable onPress={increaseItemHandler} style={styles.box}>
        <IconButton
          icon="chevron-up"
          size={12}
          color={GlobalStyles.colors.primary500}
        />
      </Pressable>
    </View>
  );
};

export default QuantityController;

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 1,
    borderRadius: 10,
    marginTop: 5,
    borderColor: GlobalStyles.colors.primary500,
  },
  quantity: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
