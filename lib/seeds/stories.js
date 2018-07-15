const Story     = require('../models/Story')
const paragraphs = require('./paragraphs')
const stories   = []

const newStory = new Story({
  title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  paragraphs
})
stories.push(newStory)

module.exports = stories
