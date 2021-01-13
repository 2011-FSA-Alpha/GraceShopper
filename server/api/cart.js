const router = require('express').Router()

//require cart model from database
const {Cart} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const cartItems = await Cart.findAll()
    res.send(cartItems)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newCartItem = await Cart.create(req.body)
    res.send(newCartItem)
  } catch (error) {
    next(error)
  }
})

router.delete('/:cartItemId', (req, res, next) => {
  try {
    res.send(Cart.destroy({where: {id: req.params.cartItemId}}))
  } catch (error) {
    next(error)
  }
})

router.put('/:cartItemId', async (req, res, next) => {
  try {
    const updateItem = await Cart.findByPk(req.params.cartItemId)
    res.send(updateItem.update(req.body))
  } catch (error) {
    next(error)
  }
})

module.exports = router
