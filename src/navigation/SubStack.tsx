import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { RootList } from "../types";
import CartScreen from "../screen/CartScreen";

const Stack = createStackNavigator();

const SubTab = ({ navigation, route }: RootList<"SubTab">) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CartScreen} />
    </Stack.Navigator>
  );
};

export default SubTab;
