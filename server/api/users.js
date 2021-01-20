const router = require('express').Router()
const {User} = require('../db/models')
const adminOnly = require('../util/adminOnly')
module.exports = router

router.get('/', adminOnly, async (req, res, next) => {
  try {
    console.log('hello', req.query)
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
