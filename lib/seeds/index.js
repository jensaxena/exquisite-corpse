const User  = require('../models/User' )
const Sentence  = require('../models/Sentence')
const Paragraph = require('../models/Paragraph')
const Story = require('../models/Story')
const users = require('./users')
const sentences = require('./sentences')
const paragraphs = require('./paragraphs')
const stories = require('./stories')

const mongoose = require('mongoose')
const uri = 'mongodb://localhost:27017/exquisite-corpse'

const truncateDatabase = async () => {
  return Promise.all([
    User.deleteMany(),
    Sentence.deleteMany(),
    Paragraph.deleteMany(),
    Story.deleteMany(),
  ])
}

const makeSeeds = async () => {
  await mongoose.connect(uri)
  await truncateDatabase()
  await Promise.all(users.map(user => user.save()))
  await Promise.all(sentences.map(sentence => sentence.save()))
  await Promise.all(paragraphs.map(paragraph => paragraph.save()))
  await Promise.all(stories.map(story => story.save()))
  mongoose.connection.close()
}

makeSeeds()
