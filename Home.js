import { View, Text } from "react-native";
import React from "react";
import DrawerNavigator from "../drawer/DrawerNavigator";
import "react-native-gesture-handler";
function Home() {
  return (
    <View style={{ flex: 1 }}>
      <DrawerNavigator />
    </View>
  );
}

export default Home;
