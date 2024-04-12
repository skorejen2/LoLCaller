import { StatusBar } from "expo-status-bar";
import { LogBox, StyleSheet, Text, View } from "react-native";
import Login from "./Login.js";
import Register from "./Register.js"; // Import the Register component
import Home from "./Home.js"; // Import the Home component
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Create a stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login} // Replace Login with your actual login screen component
        />
        <Stack.Screen
          name="Register"
          component={Register} // Add a new screen for Register component
        />
        <Stack.Screen
          name="Home"
          component={Home} // Add a new screen for Register component
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
