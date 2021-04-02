import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MainParamList } from "../types";
const HomeScreen = ({ navigation, route }: MainParamList<"HomeScreen">) => {
  return (
    <SafeAreaView>
      <View style={[{ backgroundColor: "red" }]}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
