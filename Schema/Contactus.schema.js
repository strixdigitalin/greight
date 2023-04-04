const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    fullName: { type: String, required: [true, "Full Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    message: { type: String, required: [true, "Message is required"] },
    contact: { type: Number, required: [true, "Contact is required"] },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("contact_us", Schema);
