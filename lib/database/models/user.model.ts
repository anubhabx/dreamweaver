import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: {
    type: String,
  },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);

export default User;
