const express   = require('express')
const Router    = express.Router
const router    = Router()
const Paragraph = require('../models/Paragraph')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Paragraph.find().populate({
      path: 'sentences',
      populate: { path: 'user' }
    })
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

router.get('/:paragraph_id', async (req, res, next) => {
  try {
    const { paragraph_id } = req.params
    const docs = await Paragraph.findById(paragraph_id).populate({
      path: 'sentences',
      populate: { path: 'user' }
    })
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

module.exports = router
