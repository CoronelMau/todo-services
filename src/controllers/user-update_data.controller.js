import UserModel from "../schemas/user.schema.js";

const userUpdateDataController = async(req, res)=>{
  const { id } = req;
  const { name } = req.body;

  const existingUserById = await UserModel.findById(id).exec();
  if(!existingUserById) return res.status(401).send({message: 'User not found'});

  existingUserById.name = name;
  await existingUserById.save();

  return res.send({message: 'User updated'});
}

export default userUpdateDataController;