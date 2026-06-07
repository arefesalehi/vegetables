const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
    required: true,
  },

  authority: {
    type: String,
    required: true,
    unique: true,
  },
});

const model =
  mongoose.models.Checkout || mongoose.model("Checkout", checkoutSchema);

module.exports = model;
