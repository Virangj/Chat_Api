import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      require: true,
      unique: true,
    },
    fullname: {
      type: "string",
      require: true,
    },
    password: {
      type: "string",
      require: true,
      minlength: 6,
    },
    profilePic: {
      type: "string",
      default: "",
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
