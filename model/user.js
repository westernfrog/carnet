import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  firstname: String,
  lastname: String,
});

const Users = models.cheatsheet || model("cheatsheet", userSchema);
export default Users;
