import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
      senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
      },
      receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
      },
      text: {
        type: "string",
      },
      image: {
        type: "string",
      }
    },
    {
      timestamps: true,
    }
  );
  
  const Message = mongoose.model("Message", messageSchema);
  
  export default Message;