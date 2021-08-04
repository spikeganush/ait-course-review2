require('dotenv').config({ path: './config.env' })
const express = require('express')
const errorHandler = require('./middleware/error')
const { checkUser } = require('./middleware/auth')
const cors = require('cors')

//Connect to the DB
require('./config/db')

const app = express()

app.use(express.json())
app.use(cors())

//jwt
app.get('*', checkUser)
app.get('/jwtid', checkUser, (req, res) => {
  res.status(200).send(res.locals.user._id)
})

// routes
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/auth', require('./routes/auth'))

//Error Handler (Should be last piece of middleware)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
)

process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged error: ${err}`)
  server.close(() => process.exit(1))
})
