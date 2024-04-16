import mongoose, { Schema } from "mongoose";

export interface IUser {
  clerkId: string;
  email: string;
  username: string;
  avatar: string;
}

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
