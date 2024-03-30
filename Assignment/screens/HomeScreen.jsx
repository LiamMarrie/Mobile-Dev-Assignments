import React from "react";
import { Button, View, Text } from "react-native";
import MainLayout from "../layouts/MainLayout";

function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
}

export default HomeScreen;
