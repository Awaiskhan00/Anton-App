const mongoose = require("mongoose");

const antonSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  atn_number: {
    type: String,
    required: true,
    unique: true,
  },
  profile_image: {
    type: Buffer,
  },
});

const Anton = mongoose.model("Anton", antonSchema);

module.exports = Anton;
