import { Type } from '@sinclair/typebox'
import { passwordDTOSchema } from './dto-types';
import Ajv from 'ajv';
import addErrors from 'ajv-errors'

export const ChangePwdDTOSchema = Type.String({
  oldPassword: passwordDTOSchema,
  newPassword: passwordDTOSchema,
},{
  additionalProperties: false, 
  errorMessage:{
    additionalProperties: 'Object format not valid'
  }
});

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');
ajv.addFormat('password', /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*$/);

addErrors(ajv);

const validateSchema = ajv.compile(ChangePwdDTOSchema);

const userChangePwdDTO = (req, res, next) => {
  const isDTOValid = validateSchema(req.body);

  if(!isDTOValid) 
    return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});

  next();
  }

export default userChangePwdDTO;