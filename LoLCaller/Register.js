import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { login, register } from "./serverRequests/serverAuthRequests.js";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const onRegister = () => {
    register(username, password, email);
    Alert.alert("Clicked register ", `${email} + ${username} + ${password}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          placeholder={"Email"}
          style={styles.input}
        />
        <TextInput
          value={username}
          onChangeText={(newUsername) => setUsername(newUsername)}
          placeholder={"Username"}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(newPassword) => setPassword(newPassword)}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title={"Register"} onPress={onRegister} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  button: {
    width: "45%",
  },
});

export default Register;
