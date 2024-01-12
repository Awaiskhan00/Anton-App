const mongoose = require("mongoose");
const validator = require("validator");

const antonSchema = new mongoose.Schema(
  {
    full_name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    date_of_birth: {
      type: Date,
      required: true,
      validate(value) {
        if (isNaN(Date.parse(value))) {
          throw new Error("Invalid date_of_birth format");
        }
      },
    },
    atn_number: {
      type: String,
      required: true,
      unique: true,
    },
    profile_image: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
);

const Anton = mongoose.model("Anton", antonSchema);

module.exports = Anton;
