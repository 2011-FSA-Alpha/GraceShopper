const router = require('express').Router()
const {Product} = require('../db/models')
module.exports = router

router.get('/:productId', async (req, res, next) => {
  try {
    const user = await Product.findByPk(req.params.productId)
    res.json(user)
  } catch (error) {
    next(error)
  }
})
