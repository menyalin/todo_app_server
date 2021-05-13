const { Task } = require('../../models')

module.exports.get = (req, res) => {
  res.send('task get end-point')
}

module.exports.getById = (req, res) => {
  const { taskId } = req.params
  res.send(`task GetById end-point, ${taskId}`)
}

module.exports.create = async (req, res) => {
  const newTask = new Task({ content: req.body.content })
  await newTask.save()
  res.json(newTask)
}

module.exports.update = (req, res) => {
  const { taskId } = req.params
  res.send(`task PUT end-point, ${taskId}`)
}

module.exports.remove = (req, res) => {
  const { taskId } = req.params
  res.send(`task DELETE end-point, ${taskId}`)
}
