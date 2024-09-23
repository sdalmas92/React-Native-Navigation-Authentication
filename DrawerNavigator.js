import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Main from "./Main";
import Contact from "./Contact";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen
      name="Home"
      componente={Home}/> */}

      <Drawer.Screen
        name="Main"
        component={Main}
        options={{ headerShown: true }}
      />

      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
