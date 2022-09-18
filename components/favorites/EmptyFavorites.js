import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../IconButton";
import { GlobalStyles } from "../../constants/styles";

const EmptyFavorites = () => {
  const navigation = useNavigation();

  const startShoppingHandler = () => {
    navigation.navigate("productList");
  };
  return (
    <View style={styles.emptyFavorites}>
      <IconButton
        icon="heart"
        size={44}
        color={GlobalStyles.colors.primary100}
      />
      <Text style={styles.emptyFavoritesText}>No Favorites Added</Text>
      <Pressable
        android_ripple={{ color: GlobalStyles.colors.primary100 }}
        onPress={startShoppingHandler}
        style={styles.startShoppingButton}
      >
        <Text style={styles.startShoppingText}>
          Start Adding Your Favorites
        </Text>
      </Pressable>
    </View>
  );
};

export default EmptyFavorites;

const styles = StyleSheet.create({
  emptyFavorites: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyFavoritesText: {
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
