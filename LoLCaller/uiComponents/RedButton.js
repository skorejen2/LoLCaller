import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const RedButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default RedButton;
