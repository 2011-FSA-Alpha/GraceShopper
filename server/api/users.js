const router = require('express').Router()
const {User} = require('../db/models')
const adminOnly = require('../util/adminOnly')
module.exports = router

// GET /api/users
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

router.put('/:userId', async (req, res, next) => {
  try {
    const updateUser = await User.findByPk(req.params.userId)
    const {name, email} = req.body

    const updatedUser = await updateUser.update({
      name,
      email
    })

    res.json(updatedUser)
  } catch (error) {
    console.error(error)
  }
})
