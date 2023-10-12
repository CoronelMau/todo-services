import mongoose from "mongoose";
const {Schema, model} = mongoose;

const taskSchema = new Schema({
  _id:{ type: String, _id: false },
  description: { type: String, require: true, minLength: 2},
  check: {type: Boolean, default: false},
});

export default taskSchema;