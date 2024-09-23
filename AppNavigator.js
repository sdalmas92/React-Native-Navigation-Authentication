import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Splash from "./normal/Splash";
import Home from "./normal/Home";
import LoginScreen from "./normal/LoginScreen";
import RegisterScreen from "./normal/RegisterScreen";

import MobileRechage from "./screens/MobileRechage";
import DTH from "./screens/DTH";
import CableTv from "./screens/CableTv";
import Postpaid from "./screens/Postpaid";

import Flight from "./screens/Flight";
import Holidays from "./screens/Holidays";
import Bus from "./screens/Bus";
import Hotels from "./screens/Hotels";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegisterScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Recharge" component={MobileRechage} />
        <Stack.Screen name="dth" component={DTH} />
        <Stack.Screen name="CableTv" component={CableTv} />
        <Stack.Screen name="Postpaid" component={Postpaid} />

        <Stack.Screen name="Flight" component={Flight} />
        <Stack.Screen name="Bus" component={Bus} />
        <Stack.Screen name="Holidays" component={Holidays} />
        <Stack.Screen name="Hotels" component={Hotels} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
