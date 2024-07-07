const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  dob: String,
  address1: String,
  address2: String,
  city: String,
  state: String,
  pincode: String,
  image: String
});

const Users = mongoose.model("users", userSchema);
module.exports = Users;
