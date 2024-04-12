import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";
import { login } from "./serverRequests/serverAuthRequests.js";
import { getAllUsers } from "./serverRequests/serverRequests.js";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    login(username, password);
    Alert.alert("Login succesful", `${username} + ${password}`);
  };

  const onRegister = () => {
    navigation.navigate("Register");
    Alert.alert("Login succesful", `${username} + ${password}`);
  };

  const onGetAll = () => {
    var data = getAllUsers();
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
          <Button title={"Login"} onPress={onLogin} />
        </View>
        <View style={styles.button}>
          <Button title={"Register"} onPress={onRegister} />
        </View>
        <View style={styles.button}>
          <Button title={"GetAll"} onPress={onGetAll} />
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
    width: "25%",
  },
});

export default Login;
