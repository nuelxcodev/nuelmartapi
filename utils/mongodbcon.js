const mongoose = require ("mongoose");

async function Dbconnection() {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connection established"))
    .catch((err) => console.error("MongoDB connection error:", err));
}

module.exports= Dbconnection