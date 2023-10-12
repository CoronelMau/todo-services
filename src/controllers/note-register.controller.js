import NoteModel from '../schemas/note.schema.js';
import { v4 as uuidv4} from 'uuid';

const noteRegisterController = async(req, res) =>{
  const { title, tasks, author } = req.body;
  const _id = uuidv4();

  const existingNoteById = await NoteModel.findById(_id).exec();
  if(existingNoteById) return res.status(409).send({
    message: 'Note already exists'
  });

  const existingNoteByTitle = await NoteModel.findOne({title}).exec();
  if(existingNoteByTitle) return res.status(409).send({
    message: 'Note already exists'
  });
  
  
  const note = new NoteModel({
     _id, title, tasks, author
  });

  await note.save();
  return res.status(201).send({
    message: 'Task registered!' 
  });
}

export default noteRegisterController;