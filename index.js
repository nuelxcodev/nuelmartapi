const express = require("express");
const { Router } = require("express");
const app = express();
require("dotenv").config();
const router = require("./route/approutes.js");
const Dbconnection = require("./utils/mongodbcon.js");

const PORT = process.env.PORT;

app.use("/api", router);

// Wrap the async Dbconnection call and server start in an async function
async function startServer() {
  try {
    await Dbconnection(); // Establish database connection
    app.listen(PORT, () => {
      console.log(`Server is now running on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
}

startServer(); // Call the async function
