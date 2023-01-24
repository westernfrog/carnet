import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
});

const Users = models.cheatsheet || model("cheatsheet", userSchema);
export default Users;
