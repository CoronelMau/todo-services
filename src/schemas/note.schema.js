import mongoose from "mongoose";
import taskSchema from "./task.schema.js";
const {Schema, model} = mongoose;

const noteSchema = new Schema({
  _id:{ type: String, _id: false },
  title: { type: String, require: true, minLength: 2, maxLength: 20},
  tasks: [taskSchema],
  author: {type: String, require: true} 
});

const NoteModel = model("Note", noteSchema);

export default NoteModel;