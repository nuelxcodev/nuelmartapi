const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const OTPschema = new Schema({
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  otp: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  createdAt: mongoose.SchemaTypes.Date,
  expiresAt: mongoose.SchemaTypes.Date,
});

module.exports = mongoose.model("OTP", OTPschema);

