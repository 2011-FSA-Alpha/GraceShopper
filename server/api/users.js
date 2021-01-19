const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
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
