import NoteModel from "../schemas/note.schema.js";

const taskUpdateCheckController = async(req, res)=>{
  const { _id, tasks } = req.body;

  const existingTaskById = await NoteModel.findById(_id).exec();
  if(!existingTaskById) return res.status(401).send({message: 'Task not found'});

  existingTaskById.tasks = tasks;
  await existingTaskById.save();

  return res.send({message: 'Task updated'});
}

export default taskUpdateCheckController;