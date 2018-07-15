const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const sentenceSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  content: {
    type:    'String',
    required: true
  },
  lastWord: {
    type:    'String',
    required: true
  },
  // nextSentence: {
  //   type:
  // },
  date: {
    type:    Date,
    default: new Date()
  }
})
sentenceSchema.methods.getLastWord = (content) => {
  const words = content.split(' ')
  const lastWord = words[words.length -1]
  return lastWord
}

module.exports = mongoose.model('Sentence', sentenceSchema)
