import { StyleSheet, View, FlatList, Text, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getShopItems } from "../store/shop";
import Card from "../components/product/Card";

const ProductList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, items } = useSelector((state) => state.shop);

  // const [products,setProducts] = useState()
  // const [loading,setLoading] = useState(false)

  // const fetchProducts = async () => {
  //   try {
  //     setLoading(true)
  //     const response = await fetch("https://my-json-server.typicode.com/benirvingplt/products/products")
  //   const json = await response.json()
  //   setLoading(false)
  //   console.log("api json", json)
  //   setProducts(json)
  //   } catch (error) {
  //   setLoading(false)
  //     console.log("error", error)
  //   }
  // }

  useEffect(() => {
    dispatch(getShopItems());
  }, []);

  const clickHandler = (id) => {
    navigation.navigate("productDetail", {
      productId: id,
    });
  };

  const favoritesToggleHandler = () => {};

  return (
    <View style={styles.rootConatiner}>
      {isLoading ? (
        <Text>Loading..</Text>
      ) : (
        <FlatList
          data={items}
          renderItem={(itemData) => (
            <Card
              data={itemData.item}
              clickHandler={() => clickHandler(itemData.item.id)}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      {/*  <ScrollView>
       {products && products.map(item=><Text key={item.id}>{item.name}</Text>)}
       </ScrollView>
} */}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    padding: 15,
  },
});
