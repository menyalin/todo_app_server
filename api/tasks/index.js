const express = require('express')
const router = express.Router()

const { get, getById, create, update, remove } = require('./handlers')

router.get('/', get)

router.get('/:taskId', getById)

router.post('/', create)

router.put('/:taskId', update)

router.delete('/:taskId', remove)

module.exports = router
