const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  uid: { type: String, required: true, unique: true },
  username: { type: String, unique: true, max: 30 },
  email: { type: String, required: true, unique: true, max: 300 },
  name: { type: String, required: true, max: 150 },
  image: { type: String },
  isNewUser: { type: Boolean, default: false },
  isVerifiedEmail: { type: Boolean, default: false },
  // tweets: {},
  // retweets: {},
  // replies: {},
});

module.exports = mongoose.model("user", UserSchema);
