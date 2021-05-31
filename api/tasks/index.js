const express = require('express')
const router = express.Router()

const { get, create, update, remove, updateGroup } = require('./handlers')
const { jwtAuth } = require('../../utils/auth.middlewares')
const { bodyValidator, queryValidator } = require('../../utils/validator')
const {
  taskCreateSchema,
  taskUpdateSchema,
  getTaskQuerySchema
} = require('./schemes')

router.get('/', [jwtAuth, queryValidator(getTaskQuerySchema)], get)
router.post('/', [jwtAuth, bodyValidator(taskCreateSchema)], create)
router.put('/', [jwtAuth], updateGroup)
router.put('/:taskId', [jwtAuth, bodyValidator(taskUpdateSchema)], update)
router.delete('/:taskId', [jwtAuth], remove)

module.exports = router
