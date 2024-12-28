const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    username: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    email: {
      type: mongoose.SchemaTypes.String,
      required: true,
      unique: true
    },
    password: {
      type: mongoose.SchemaTypes.String,
      required: true,
    },
    token: {
      type: mongoose.SchemaTypes.String,
    },
  });
  
  module.exports  = mongoose.model("Users", userSchema);
