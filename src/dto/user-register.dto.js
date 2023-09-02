import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormat from 'ajv-formats';
import addErrors from 'ajv-errors';
import { emailDTOSchema, 
  idDTOSchema, 
  nameDTOSchema, 
  passwordDTOSchema } from './dto-types';

const RegisterDTOSchema = Type.Object({
  _id: idDTOSchema,
  name: nameDTOSchema,
  email: emailDTOSchema,
  password: passwordDTOSchema
},{
  additionalProperties: false,
  errorMessage: {
    additionalProperties: 'Object format not valid'
  }
});

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addFormat(ajv, ['email', 'uuid']);
addErrors(ajv);

const validateSchema = ajv.compile(RegisterDTOSchema);

const userRegisterDTO = (req, res, next) =>{
  const isDTOValid = validateSchema(req.body);

  if(!isDTOValid)
    return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});

    next();
}

export default userRegisterDTO;