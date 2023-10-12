import NoteModel from '../schemas/note.schema.js';

const noteDeleteController = async(req, res) =>{
  const { _id } = req.body;

  const existingNoteById = await NoteModel.findById(_id).exec();
  if(!existingNoteById) return res.status(409).send({
    message: 'Note not exist'
  });

  await existingNoteById.deleteOne();
  return res.status(201).send({
    message: 'Note deleted!' 
  });
}

export default noteDeleteController;