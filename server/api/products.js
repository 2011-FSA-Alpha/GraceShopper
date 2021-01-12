const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const users = await Product.findAll({})
    res.json(users)
  } catch (err) {
    next(err)

router.get('/:productId', async (req, res, next) => {
  try {
    const user = await Product.findByPk(req.params.productId)
    res.json(user)
  } catch (error) {
    next(error)
  }
})
