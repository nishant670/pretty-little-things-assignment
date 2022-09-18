import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardFooter = ({ price, color, priceStyles }) => {
  return (
    <View style={styles.footerContainer}>
      <View>
        <Text style={[styles.price, priceStyles]}>{`$ ${price}`}</Text>
        {priceStyles && <Text>inclusive of all taxes</Text>}
      </View>
      <View style={styles.colorContainer}>
        <View
          style={[
            styles.colorBox,
            {
              backgroundColor:
                color == "Stone" ? "#B7B09C" : color.toLowerCase(),
            },
          ]}
        ></View>
        <Text style={styles.colorText}>{color}</Text>
      </View>
    </View>
  );
};

export default CardFooter;

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  colorContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorBox: {
    width: 15,
    height: 15,
  },
  colorText: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});
