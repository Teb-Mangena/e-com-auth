import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  imageUrl: {
    type: String,
    default: ""
  },
  clerkId: {
    type: String,
    unique: true,
    required: true
  }
},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User;