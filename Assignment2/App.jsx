/**
 * My To Do List App
 *
 * @format
 */

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  return (
    <SafeAreaView style={styles.ToDoContainer}>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ToDoContainer: {
    top: 350,
    width: "85%",
    alignSelf: "center",
    margin: "0 auto",
  },
});

export default App;
