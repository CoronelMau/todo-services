import { compare } from "bcrypt";
import UserModel from "../schemas/user.schema.js";
import { SignJWT } from "jose";

const userLoginController = async(req, res) =>{
  const {email, password} = req.body;

  const existingUserByEmail = await UserModel.findOne({email}).exec();
  if(!existingUserByEmail) return res.status(401).send('Incorrect data');

  const checkPwd = await compare(password, existingUserByEmail.password);
  if(!checkPwd) return res.status(401).send('Incorrect data');

  const jwtConstructor = new SignJWT({id: existingUserByEmail._id});
  const encoder = new TextEncoder();

  const jwt = await jwtConstructor
    .setProtectedHeader({alg: 'HS256', type: 'JWT'})
    .setIssuedAt()
    .setExpirationTime('7d').sign(encoder.encode(process.env.JWT_PRIVATE_KEY));

    return res.send({ jwt });
};

export default userLoginController;