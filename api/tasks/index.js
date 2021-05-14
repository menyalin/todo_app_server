const express = require('express')
const router = express.Router()

const { get, getById, create, update, remove, updateGroup } = require('./handlers')
const { jwtAuth } = require('../../utils/auth.middlewares')
const { bodyValidator } = require('../../utils/validator')
const { taskCreateSchema, taskUpdateSchema } = require('./schemes')

router.get('/', [jwtAuth], get)
router.get('/:taskId', [jwtAuth], getById)
router.post('/', [jwtAuth, bodyValidator(taskCreateSchema)], create)
router.put('/', [jwtAuth], updateGroup)
router.put('/:taskId', [jwtAuth, bodyValidator(taskUpdateSchema)], update)
router.delete('/:taskId', [jwtAuth], remove)

module.exports = router
