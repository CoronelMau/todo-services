import { Type } from '@sinclair/typebox'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import addErrors from 'ajv-errors'
import { emailDTOSchema, passwordDTOSchema } from './dto-types.js'

const LoginDTOSchema = Type.Object({
  email: emailDTOSchema,
  password: passwordDTOSchema
},{
  additionalProperties: false,
  errorMessage:{
    additionalProperties: 'Object format not valid'
  }
});

const ajv  = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormats(ajv, ['email']);
addErrors(ajv);

const validateSchema = ajv.compile(LoginDTOSchema);

const userLoginDTO = (req, res, next) =>{
  const isDTOValid = validateSchema(req.body);

  if(!isDTOValid)
    return res.status(400).send({erros: validateSchema.errors.map(error => error.message)});

  next();
  }

export default userLoginDTO;