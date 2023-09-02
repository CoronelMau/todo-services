import { hash } from 'bcrypt';
import UserModel from '../schemas/user.schema';

const userRegisterController = async(req, res) =>{
  const { _id, name, email, password } = req.body;

  const existingUserById = await UserModel.findById(_id).exec();
  if(existingUserById) return res.status(409).send('User already exists');

  const existingUserByEmail = await UserModel.findOne(email).exec();
  if(existingUserByEmail) return res.status(409).send('Email already exists');

  const hashedPwd = await hash(password, 12);
  
  const user = new UserModel({
    _id, name, email, password: hashedPwd
  });

  await user.save();
  return res.status(201).send('User registered!');
}

export default userRegisterController;