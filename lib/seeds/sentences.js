const Sentence  = require('../models/Sentence')
const users     = require('./users')

const sentences = []

const sentence0 = new Sentence({
  user: users[0],
  content: 'Beatae eaque sit aliquam amet dolorem magnam unde corrupti quisquam placeat excepturi delectus quis, alias rerum tempora error laudantium quibusdam ut officia optio quaerat consequatur voluptatibus iste?',
  lastWord: ''
})
sentence0.lastWord = sentence0.getLastWord(sentence0.content)

const sentence1 = new Sentence({
  user: users[0],
  content: 'Voluptates facilis doloribus tenetur mollitia accusamus illo, rerum nemo consequuntur error, magni officia.',
  lastWord: ''
})
sentence1.lastWord = sentence1.getLastWord(sentence1.content)

const sentence2 = new Sentence({
  user: users[0],
  content: 'Maxime, maiores labore!',
  lastWord: ''
})
sentence2.lastWord = sentence2.getLastWord(sentence2.content)

sentences.push(sentence0, sentence1, sentence2)

module.exports = sentences
