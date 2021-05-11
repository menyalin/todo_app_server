exports.loginSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 4 }
  },
  required: ['email', 'password'],
  additionalProperties: false
}

exports.registrationSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email' },
    password: { type: 'string', minLength: 4 }
  },
  required: ['email', 'password'],
  additionalProperties: false
}
