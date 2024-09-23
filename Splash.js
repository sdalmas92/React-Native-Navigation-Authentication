import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 5000);
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#2492eb" }}
    >
      <Text style={{ margin: 40 }}>welcome</Text>
    </View>
  );
};

export default Splash;
