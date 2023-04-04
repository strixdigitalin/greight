const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    image: { type: String, required: [true, "Image is required"] },
    title: { type: String, required: [true, "title is required"] },
    description: { type: String, required: [true, "Description is required"] },
    expandText: {
      type: String,
      required: [true, "Expending Text is required"],
    },
    expandNum: {
      type: String,
      required: [true, "Expending Number is required"],
    },
    investmentRange: {
      type: String,
      required: [true, "Investment range is required ex: INR 10-15 Lac"],
    },
    contact: { type: Number, required: [true, "Contact is required"] },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("business", Schema);
