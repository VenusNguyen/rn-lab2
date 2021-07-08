import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MenuItem from "./components/MenuItem";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Snap Eating Account</Text>
      {/* TODO (part 1): update these props with your favorite food item */}
      <MenuItem name={"Curry"} price={20} imageSource={require("./assets/vietnamese-chicken-curry.jpeg")} />
      {/* TODO (part 2): add another MenuItem! */}
      <MenuItem name={"Curry"} price={"20"} imageSource={require("./assets/vietnamese-chicken-curry.jpeg")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
});
