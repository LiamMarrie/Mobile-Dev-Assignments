/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {
  // Part A: State Management
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  return (
    <SafeAreaView style={styles.ToDoContainer}>
      {/* Part B: Passing Props */}
      <ToDoList tasks={tasks} />
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
