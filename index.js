const express = require("express");
const { Router } = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
require("dotenv").config();
const router = require("./route/approutes.js");
const Dbconnection = require("./utils/mongodbcon.js");

const PORT = process.env.PORT;

app.use("/api", router);
app.use(express.json());
app.use(
  cors({
    origin: "https://nuelmart.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"], 
    allowedHeaders: ["Content-Type", "Authorization"],
  })
); // Update this with your frontend URL
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

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
