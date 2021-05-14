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
  },
  order: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: () => Date()
  }
})

module.exports = model('Task', taskSchema, 'tasks')
