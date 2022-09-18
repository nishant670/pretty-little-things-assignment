import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

import CardFooter from "../product/CardFooter";
import QuantityController from "./QuantityController";
import { removeItem } from "../../store/cart";
import IconButton from "../IconButton";

const CartItem = ({ data, numberOfLines, clickHandler }) => {
  const { img, id, colour, price, name, amount } = data;
  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  };
  return (
    <Pressable
      onPress={clickHandler}
      android_ripple={{ color: "#fff" }}
      style={({ pressed }) =>
        pressed ? [styles.cartItem, styles.buttonPressed] : styles.cartItem
      }
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: img }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.details}>
        <Text numberOfLines={numberOfLines} style={styles.name}>
          {name}
        </Text>
        <CardFooter
          price={price}
          color={colour}
          containerStyles={{ paddingHorizontal: 0 }}
        />
        <View style={styles.quantityContainer}>
          <Text>Quantity:</Text>
          <QuantityController id={id} amount={amount} />
        </View>
        <View style={styles.removeContainer}>
          <IconButton icon="trash" color="red" onPress={removeItemHandler} />
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    margin: 15,
    marginBottom: 0,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  imageContainer: {
    flex: 0.3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
  },
  details: {
    flex: 0.65,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  removeContainer: {
    marginVertical: 10,
  },
});
