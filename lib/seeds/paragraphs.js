const Paragraph = require('../models/Paragraph')
const sentences = require('./sentences')

paragraphs = []

const paragraph0 = new Paragraph({
  sentences
})
const paragraph1 = new Paragraph({
  sentences
})
const paragraph2 = new Paragraph({
  sentences
})
paragraphs.push(paragraph0, paragraph1, paragraph2)

module.exports = paragraphs
