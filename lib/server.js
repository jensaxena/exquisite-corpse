const path     = require('path'    )
const config   = require('config'  )
const express  = require('express' )
const mongoose = require('mongoose')
const app   = express()
const PORT  = config.PORT
const DBURI = config.DBURI

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
  await mongoose.connect(DBURI)
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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
})
