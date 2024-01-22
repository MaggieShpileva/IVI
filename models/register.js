import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: String,
    name: String,
    password: String,
    role: String,
  },
  { timestamps: true }
);
const Users = mongoose.models.Users || mongoose.model("Users", userSchema);
export default Users;
