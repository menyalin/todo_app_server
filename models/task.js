const { Schema, model, SchemaTypes } = require('mongoose')

const taskSchema = new Schema({
  content: String,
  user: {
    type: SchemaTypes.ObjectId,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Task', taskSchema, 'tasks')
