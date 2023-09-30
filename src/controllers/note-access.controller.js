import NoteModel from "../schemas/note.schema.js";

const noteAccessController = async(req, res) =>{
  const { id } = req;

  const existingNoteById = await NoteModel.find({author: id}).exec();
  if(!existingNoteById) return res.status(401).send({ message:'Note not found' });

  return res.send(existingNoteById);
};

export default noteAccessController;