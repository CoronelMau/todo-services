import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import {
  titleDTOSchema,
  taskDTOSchema,
  idAuthorDTOSchema
 } from './dto-types.js';

const NoteDTOSchema = Type.Object({
  title: titleDTOSchema,
  tasks: taskDTOSchema,
  author: idAuthorDTOSchema 
},{
  additionalProperties: false,
  errorMessage: {
    additionalProperties: 'Object format not valid'
  }
});

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');

addErrors(ajv);

const validateSchema = ajv.compile(NoteDTOSchema);

const noteRegisterDTO = (req, res, next) =>{
  const isDTOValid = validateSchema(req.body);

  if(!isDTOValid)
    return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});

    next();
}

export default noteRegisterDTO;