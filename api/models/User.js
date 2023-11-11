const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
      required: true,
      // default:
      //   "https://img.freepik.com/free-photo/portrait-smiling-handsome-man-eyeglasses_171337-4853.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699142400&semt=ais",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
