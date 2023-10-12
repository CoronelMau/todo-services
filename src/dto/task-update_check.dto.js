import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormat from 'ajv-formats'
import { taskDTOSchema, idDTOSchema } from './dto-types.js';

const UpdateCheckDTOSchema = Type.Object({
  _id: idDTOSchema,
  tasks: taskDTOSchema
},{
  additionalProperties: false,
  errorMessage: {
    additionalProperties: 'Object format not valid'
  }
});

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');
addFormat(ajv,['uuid'])
addErrors(ajv);

const validateSchema = ajv.compile(UpdateCheckDTOSchema);

const taskUpdateCheckDTO = (req, res, next) =>{
  const isDTOValid = validateSchema(req.body);

  if(!isDTOValid)
    return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});

    next();
  }

export default taskUpdateCheckDTO;