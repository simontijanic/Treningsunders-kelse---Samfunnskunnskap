const mongoose = require("mongoose");

const TokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  used: { type: Boolean, default: false },
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 14400,
  },
});

module.exports = mongoose.model("Token", TokenSchema);
