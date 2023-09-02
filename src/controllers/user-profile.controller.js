import UserModel from "../schemas/user.schema.js";

const userPorfileController = async(req, res) =>{
  const { id } = req;

  const existingUserById = await UserModel.findById(id).exec();
  if(!existingUserById) return res.status(401).send('User not found');

  const { _id, name, email } = existingUserById;
  return res.send({ _id, name, email });
};

export default userPorfileController;