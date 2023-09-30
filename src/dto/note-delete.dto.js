import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import addErrors from 'ajv-errors';
import {
  idDTOSchema,
 } from './dto-types.js';

const NoteDeleteDTOSchema = Type.Object({
  _id: idDTOSchema,
},{
  additionalProperties: false,
  errorMessage: {
    additionalProperties: 'Object format not valid'
  }
});

const ajv = new Ajv({allErrors: true}).addKeyword('kind').addKeyword('modifier');

addFormats(ajv, ['uuid']);
addErrors(ajv);

const validateSchema = ajv.compile(NoteDeleteDTOSchema);

const noteDeleteDTO = (req, res, next) =>{
  const isDTOValid = validateSchema(req.body);

  if(!isDTOValid)
    return res.status(400).send({errors: validateSchema.errors.map(error => error.message)});

    next();
}

export default noteDeleteDTO;