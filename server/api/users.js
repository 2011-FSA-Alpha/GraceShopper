const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findOrCreate({
      where: {
        name: req.query.name,
        email: req.query.email
      }
    })
    res.send(users[0])
  } catch (err) {
    next(err)
  }
})
