const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const storySchema = new Schema({
  title: {
    type:     String,
    required: true
  },
  paragraphs: [{
    type: Schema.Types.ObjectId,
    ref: 'Paragraph',
    sentences: [{
      type: Schema.Types.ObjectId,
      ref: 'Sentence'
    }]
  }]
})

module.exports = mongoose.model('Story', storySchema)
