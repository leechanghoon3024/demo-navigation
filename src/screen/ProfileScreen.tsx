import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MainParamList } from "../types";
const ProfileScreen = ({ navigation, route }: MainParamList<"ProfileScreen">) => {
  
  
  return (
    <View style={[StyleSheet.absoluteFillObject, { backgroundColor: "red" }]}>
      <Text>Home</Text>
    </View>
  );
};

export default ProfileScreen;