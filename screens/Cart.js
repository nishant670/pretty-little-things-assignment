import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import CartFooter from "../components/cart/CartFooter";
import { totals, clearCart } from "../store/cart";
import EmptyCart from "../components/cart/EmptyCart";

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(totals());
  }, [cartItems]);

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={clearCartHandler} style={styles.clearCartButton}>
          <Text style={styles.clearCartText}>Clear Cart</Text>
        </Pressable>
      ),
    });
  }, []);

  const clickHandler = (id) => {
    navigation.navigate("productDetail", {
      productId: id,
    });
  };

  return (
    <View style={styles.cartContainer}>
      {cartItems.length > 0 ? (
        <View style={styles.listContainer}>
          <FlatList
            data={cartItems}
            renderItem={(itemData) => (
              <CartItem
                data={itemData.item}
                numberOfLines={1}
                clickHandler={() => clickHandler(itemData.item.id)}
              />
            )}
          />
        </View>
      ) : (
        <EmptyCart />
      )}
      <CartFooter total={total} amount={amount} />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cartContainer: {
    flex: 1,
  },
  listContainer: {
    marginBottom: 80,
  },
  clearCartButton: {
    marginRight: 20,
  },
  clearCartText: {
    color: "#fff",
  },
});
