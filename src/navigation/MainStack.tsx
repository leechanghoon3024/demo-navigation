import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootList } from "../types";
import HomeScreen from "../screen/HomeScreen";
import LoginScreen from "../screen/LoginScreen";
import ProfileScreen from "../screen/ProfileScreen";

const Stack = createStackNavigator();

const MainStack = ({ navigation, route }: RootList<"HomeTab">) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
