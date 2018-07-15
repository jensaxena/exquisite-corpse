const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const paragraphSchema = new Schema({
  sentences: [{
    type: Schema.Types.ObjectId,
    ref: 'Sentence'
  }]
})

module.exports = mongoose.model('Paragraph', paragraphSchema)
