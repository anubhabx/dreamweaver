import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  messages: [
    {
      content: {
        type: String,
        required: true,
      },
      isUser: {
        type: Boolean,
        required: true,
      },
    },
  ],
});

const Chat = mongoose.models?.Chat || mongoose.model("Chat", chatSchema);

export default Chat;
