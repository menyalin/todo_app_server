const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const authRouter = require('./api/auth')
const tasksRouter = require('./api/tasks')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/auth', authRouter)
app.use('/api/tasks', tasksRouter)

module.exports = app
