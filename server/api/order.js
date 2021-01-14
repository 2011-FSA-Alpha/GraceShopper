const router = require('express').Router()

//require order model from database
const {Order} = require('../db')

router.get('/', async (req, res, next) => {
  try {
    const orderItems = await Order.findAll()
    res.send(orderItems)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newOrderItem = await Order.create(req.body)
    res.send(neworderItem)
  } catch (error) {
    next(error)
  }
})

router.delete('/:orderItemId', (req, res, next) => {
  try {
    res.send(Order.destroy({where: {id: req.params.orderItemId}}))
  } catch (error) {
    next(error)
  }
})

router.put('/:orderItemId', async (req, res, next) => {
  try {
    const updateItem = await Order.findByPk(req.params.orderItemId)
    res.send(updateItem.update(req.body))
  } catch (error) {
    next(error)
  }
})

module.exports = router
