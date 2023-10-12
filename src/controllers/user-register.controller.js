import { hash } from 'bcrypt';
import UserModel from '../schemas/user.schema.js';
import { v4 as uuidv4} from 'uuid';

const userRegisterController = async(req, res) =>{
  const { name, email, password } = req.body;
  const _id = uuidv4();

  const existingUserById = await UserModel.findById(_id).exec();
  if(existingUserById) return res.status(409).send({
    message: 'User already exists'
  });

  const existingUserByEmail = await UserModel.findOne({email}).exec();
  if(existingUserByEmail) return res.status(409).send({
    message: 'Email already exists'
  });

  const hashedPwd = await hash(password, 12);
  
  const user = new UserModel({
     _id, name, email, password: hashedPwd
  });

  await user.save();
  return res.status(201).send({
    message: 'User registered!' 
  });
}

export default userRegisterController;