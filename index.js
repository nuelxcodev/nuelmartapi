const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

const router = require("./route/approutes.js");
const Dbconnection = require("./utils/mongodbcon.js");

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use a default port if PORT is not defined

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration
const corsOptions = {
  origin: process.env.CLEINT_URL, // Allow requests from your frontend URI
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

// Logger middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} by ${new Date(Date.now()).toLocaleString()}`);
  next();
});

// API Routes
app.use("/api", router);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(err.status || 500).json({ error: err.message });
});

// Wrap the async Dbconnection call and server start in an async function
async function startServer() {
  try {
    // Connect to the database
    await Dbconnection();
    console.log("Database connected successfully");

    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with failure code
  }
}

// Start the server
startServer();