exports.taskCreateSchema = {
  type: 'object',
  properties: {
    content: { type: 'string' },
    date: { type: 'string', format: 'date' }
  },
  required: ['content'],
  additionalProperties: true
}

exports.taskUpdateSchema = {
  type: 'object',
  properties: {
    content: { type: 'string' },
    completed: { type: 'boolean' },
    date: { type: 'string', format: 'date' },
    order: { type: 'number' }
  },
  required: ['content'],
  additionalProperties: true
}

exports.getTaskQuerySchema = {
  type: 'object',
  properties: {
    startDate: { type: 'string', format: 'date' },
    endDate: { type: 'string', format: 'date' }
  },
  required: ['startDate', 'endDate'],
  additionalProperties: true
}
