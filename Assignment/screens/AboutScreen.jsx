import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const handlePress = () => {
    // Implement your Easter egg here
    alert("Hello, Easter egg!");
  };

  return (
    <MainLayout>
      <Text>Mobile Dev TODO App</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text>Liam Marrie.</Text>
      </TouchableOpacity>
      <Text>{new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
};

export default AboutScreen;
