const express  = require('express')
const Router   = express.Router
const router   = Router()
const Sentence = require('../models/Sentence')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Sentence.find().populate('user')
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

router.get('/:sentence_id', async (req, res, next) => {
  try {
    const { sentence_id } = req.params
    const docs = await Sentence.findById(sentence_id).populate('user')
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

module.exports = router
