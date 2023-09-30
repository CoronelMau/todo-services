import { Type } from '@sinclair/typebox'

export const idDTOSchema = Type.String({
  format: 'uuid',
  errorMessage: {
    type: '_id type not valid, must be a string',
    format: '_id format not valid, must be an uuidv4'
  }
});

export const nameDTOSchema = Type.String({
  minLength: 2,
  maxLength: 20,
  errorMessage: {
    minLength: 'Name must be at least 2 characters long',
    maxLength: 'Name must be less than 20 charachters long'
  }
});

export const emailDTOSchema = Type.String({
  format:'email',
  errorMessage: {
    type: 'email type not valid, must be a string',
    format: 'email format not valid, has to fulfill RFC 5322'
  }
});

export const passwordDTOSchema = Type.String({
  format: 'password',
  minLength: 8,
  maxLength: 25,
  errorMessage:{    
    type: 'Password type not valid, must be a string',
    format: 'Password format not valid, must have a min, cap and a number',
    minLength: 'Password must be at least 8 characters long',
    maxLength: 'Password must be less than 25 charachters long'
  }
});

export const titleDTOSchema = Type.String({
  minLength: 2,
  errorMessage: {
    minLength: 'Title must be at least 2 characters long'
  }
});

export const idAuthorDTOSchema = Type.String({ 
  minLength: 2,
  errorMessage: {
    minLength: 'Author must be at least 2 characters long'
  }
});

export const taskDTOSchema = Type.Array({})

export const taskIdDTOSchema = Type.String({
  minLength: 2,
  errorMessage: {
    minLength: 'Title must be at least 2 characters long'
  }
});