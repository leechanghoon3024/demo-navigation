import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SubParamList } from "../types";
const CartScreen = ({ navigation, route }: SubParamList<"CartScreen">) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: "red" }]}>
      <Text>Home</Text>
    </View>
  );
};

export default CartScreen;
