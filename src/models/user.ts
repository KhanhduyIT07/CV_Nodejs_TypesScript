import { Schema, model } from "mongoose";

interface IUser {
  name: String;
  email: String;
}
const userSchema = new Schema<IUser>({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
});
const User = model<IUser>("User", userSchema);
export default User;
