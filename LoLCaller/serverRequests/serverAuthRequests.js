const fetch = require("node-fetch");

// Import the 'node-fetch' library

// Function to handle login
async function login(username, password) {
  try {
    const response = await fetch("https://api.example.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
}

// Function to handle registration
async function register(username, password, email) {
  let registerUserJSONData = JSON.stringify({
    name: username,
    password: password,
    email: email,
  });
  try {
    const response = await fetch(
      "https://4709-94-154-22-60.ngrok-free.app/LoLCaller/register-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: registerUserJSONData,
      }
    );

    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error during registration:", error);
  }
}

module.exports = {
  login,
  register,
};
