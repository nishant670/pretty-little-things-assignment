import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
} from "react-native";
import React from "react";
import CardFooter from "./CardFooter";

const Card = ({ data, clickHandler, numberOfLines }) => {
  const { name, img, colour, price, id } = data;
  return (
    <View style={styles.cardContainer}>
      <Pressable
        onPress={clickHandler}
        android_ripple={{ color: "#fff" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: img }} style={styles.image} />
            <Text style={styles.name} numberOfLines={numberOfLines}>
              {name}
            </Text>
          </View>
          <CardFooter price={price} color={colour} />
        </View>
      </Pressable>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.6,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 14,
    margin: 8,
    marginHorizontal: 15,
  },
});
