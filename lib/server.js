const express  = require('express' )
const mongoose = require('mongoose')
const uri   = 'mongodb://localhost:27017/exquisite-corpse'
const app   = express()
const PORT  = 8080

app.use('/users', require('./api/users'))
app.use('/sentences', require('./api/sentences'))
app.use('/paragraphs', require('./api/paragraphs'))
app.use('/stories', require('./api/stories'))


app.use((err, req, res, next) => {
  res.status(500).json({
    err: err.toString()
  })
})

app.listen(PORT, async () => {
  await mongoose.connect(uri)
  console.log(`Listening on ${PORT}`)
})

app.get('/healthcheck', (req, res) => {
  res.status(200).json({
    message: 'Ok'
  })
})

app.post('/login', (req, res) => {
  res.status(201).json({
    name:  'Default User',
    email: 'default@example.com'
  })
})
