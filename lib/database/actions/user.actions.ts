import { handleError } from "@/lib/utils";
import { connectToDatabase } from "../connect.database";
import User from "../models/user.model";

export const createUser = async (user: CreateUserParams) => {
  try {
    connectToDatabase();

    const newUser = await User.create(user);

    if (!newUser) {
      throw new Error("User creation failed");
    }

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

export const getUserById = async (userId: string) => {
  try {
    connectToDatabase();

    const user = await User.findOne({ clerkId: userId });

    if (!user) {
      throw new Error("User not found");
    }

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
};

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) {
      throw new Error("User update failed");
    }

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

export const deletedUser = async (clerkId: string) => {
  try {
    connectToDatabase();

    const userToDelete = await User.findOne({
      clerkId,
    });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    const deletedUser = await User.findByIdAndDelete(userToDelete._id);

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
};
