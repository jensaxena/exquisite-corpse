const express = require('express')
const Router  = express.Router
const router  = Router()
const Story   = require('../models/Story')

router.get('/', async (req, res, next) => {
  try {
    const docs = await Story.find().populate({
      path: 'paragraphs',
      populate: {
        path: 'sentences',
        populate: { path: 'user' }
      }
    })
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

router.get('/:story_id', async (req, res, next) => {
  try {
    const { story_id } = req.params
    const docs = await Story.findById(story_id).populate({
      path: 'paragraphs',
      populate: {
        path: 'sentences',
        populate: { path: 'user' }
      }
    })
    res.status(200).send(docs)
  } catch (e) {
    next(e)
  }
})

module.exports = router
