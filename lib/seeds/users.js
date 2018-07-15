const User  = require('../models/User')
const users = []

const defaultUser = new User({
  user:     'Dr. Frankenstein',
  email:    'default@example.com',
  password: 'hunter2'
})
users.push(defaultUser)

module.exports = users
