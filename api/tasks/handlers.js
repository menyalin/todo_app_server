const { Task } = require('../../models')

module.exports.get = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.userId })
    res.status(200).json({ data: tasks })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports.getById = (req, res) => {
  const { taskId } = req.params
  res.send(`task GetById end-point, ${taskId}`)
}

module.exports.create = async (req, res) => {
  try {
    const newTask = await Task.create({
      ...req.body,
      user: req.userId
    })
    res.status(201).json({
      data: newTask
    })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports.update = async (req, res) => {
  try {
    const { taskId } = req.params
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body)
    res.status(200).json({ data: updatedTask })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports.remove = async (req, res) => {
  try {
    const { taskId } = req.params
    await Task.deleteOne({ _id: taskId, user: req.userId })
    res.status(200).json({ message: 'Ok' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

module.exports.updateGroup = async (req, res) => {
  try {
    const tasks = req.body
    const bulkQuery = []
    for (let i = 0; i < tasks.length; i++) {
      bulkQuery.push({
        updateOne: {
          filter: { _id: tasks[i]._id },
          update: tasks[i]
        }
      })
    }
    const data = await Task.bulkWrite(bulkQuery)
    res.status(202).json(data)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}
