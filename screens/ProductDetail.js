import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalStyles } from "../constants/styles";
import CardFooter from "../components/product/CardFooter";
import ActionButton from "../components/product/ActionButton";
import { removeFavorite, addFavorite } from "../store/favorites";
import IconButton from "../components/IconButton";

const ProductDetail = ({ route, navigation }) => {
  const productId = route.params.productId;

  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.shop);
  const { ids } = useSelector((state) => state.favorites);

  const product = items.find((item) => item.id == productId);
  const isProductFavorite = ids.includes(productId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          icon="heart-o"
          color="#fff"
          onPress={() => {
            navigation.navigate("favorites");
          }}
        />
      ),
    });
  }, [navigation]);

  const favoriteToggleHandler = () => {
    console.log("fav toggle");
    if (isProductFavorite) {
      dispatch(removeFavorite(productId));
    } else {
      dispatch(addFavorite(productId));
    }
  };

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: product.img }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <CardFooter
        price={product.price}
        color={product.colour}
        priceStyles={styles.price}
      />
      <View style={styles.actionContainer}>
        <ActionButton
          icon={isProductFavorite ? "heart" : "heart-outline"}
          iconColor={isProductFavorite ? "red" : "#333"}
          text={isProductFavorite ? "My Favorite" : "Add to Favorites"}
          buttonStyles={styles.addToFav}
          textStyles={styles.addToFavText}
          pressHandler={favoriteToggleHandler}
        />
        <ActionButton
          icon="cart-outline"
          iconColor="#fff"
          text="Add to Cart"
          buttonStyles={styles.addToCart}
          textStyles={styles.addToCartText}
        />
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  rootContainer: {},
  image: {
    width: "100%",
    height: 400,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    // color: GlobalStyles.colors.primary500,
  },
  price: {
    fontSize: 21,
  },
  actionContainer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  addToFav: {
    borderColor: "#ccc",
    padding: 0,
    height: 50,
    flex: 1,
    // paddingHorizontal: 20,
  },
  addToCart: {
    borderColor: GlobalStyles.colors.primary400,
    backgroundColor: GlobalStyles.colors.primary400,
    padding: 0,
    height: 50,
    flex: 1,
    marginLeft: 10,
  },
  addToFavText: {
    color: "#333",
  },
  addToCartText: {
    color: "#fff",
  },
});
