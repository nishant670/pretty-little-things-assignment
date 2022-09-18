import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/product/Card";

const Favorites = ({ navigation }) => {
  const { ids } = useSelector((state) => state.favorites);
  const { items } = useSelector((state) => state.shop);
  const favItems = items.filter((item) => ids.includes(item.id));

  console.log("favItems", favItems);

  const clickHandler = (id) => {
    navigation.navigate("productDetail", {
      productId: id,
    });
  };

  return (
    <View style={styles.rootContainer}>
      {/* {favItems && favItems.map((fav) => <Text key={fav.id}>{fav.name}</Text>)} */}
      <FlatList
        data={favItems}
        renderItem={(itemData) => (
          <Card
            data={itemData.item}
            numberOfLines={1}
            clickHandler={() => clickHandler(itemData.item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
