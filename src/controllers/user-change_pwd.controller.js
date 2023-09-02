import { compare, hash } from 'bcrypt';
import UserModel from '../schemas/user.schema.js';

const userChangePwdController = async(req, res)=>{
  const { id } = req;
  const { oldPassword, newPassword } = req.body;

  const existingUserById = await UserModel.findById(id).exec();
  if(!existingUserById) return res.status(401).send('User not found');

  const checkPwd = await compare(oldPassword, existingUserById.password);
  if(!checkPwd) return res.status(401).send('Incorrect data');

  const hashedPwd = await hash(newPassword, 12);

  existingUserById.password = hashedPwd;
  await existingUserById.save();

  return res.send('User updated');
};

export default userChangePwdController;