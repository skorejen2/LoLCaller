import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import RedButton from "./uiComponents/RedButton";
import { getAllUsers } from "./serverRequests/serverRequests";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Send web request after screen is mounted
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <RedButton
          onPress={() => console.log("Red button pressed")}
          title="CALL OTHERS"
        />
      </View>
      <ScrollView style={styles.userList}>
        {users.map((user, index) => (
          <Text key={index} style={styles.username}>
            {user.name}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginBottom: 20,
  },
  userList: {
    width: "80%",
    maxHeight: "50%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 10,
  },
  username: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center", // Align text to center
  },
});

export default Home;
