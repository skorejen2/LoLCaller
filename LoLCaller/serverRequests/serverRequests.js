const fetch = require("node-fetch");

async function getAllUsers() {
  console.error("Fetching data");

  const response = await fetch(
    "https://4709-94-154-22-60.ngrok-free.app/LoLCaller/get-all-users", // this is working
    // in order to make request please use this command in ngrok for the server API
    // ngrok http https://localhost:7190
    //"https://192.168.1.239:7190/LoLCaller/get-all-users",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
}

module.exports = {
  getAllUsers,
};
