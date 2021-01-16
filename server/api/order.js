const router = require('express').Router()

//require order model from database
const {Order, User, Product, OrderProducts} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const orderItems = await OrderProducts.findAll()
    res.send(orderItems)
  } catch (error) {
    next(error)
  }
})

router.get('/cart/:userId', async (req, res, next) => {
  try {
    let userOrder = await Order.findOrCreate({
      where: {
        userId: req.params.userId,
        paid: false
      },
      include: [
        {
          model: Product
          //include: Order
        }
      ]
    })
    res.send(userOrder[0])
  } catch (error) {
    next(error)
  }
})

router.post('/cart/:userId', async (req, res, next) => {
  try {
    const orderProduct = await OrderProducts.findOrCreate({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId
      }
    })
    if (!orderProduct[1]) {
      orderProduct[0].quantity += 1
      await orderProduct[0].save()
    }
    res.send(orderProduct[0])
  } catch (error) {
    next(error)
  }
})

router.put('/cart/:userId', async (req, res, next) => {
  try {
    console.log(req.body)
    let userOrder = await OrderProducts.findAll({
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId
      }
    })
    userOrder[0].quantity += parseInt(req.body.quantity)
    await userOrder[0].save()
    res.send(userOrder)
  } catch (error) {
    next(error)
  }
})

router.delete('/cart/:userId', async (req, res, next) => {
  try {
    console.log(req.params, req.query)
    await OrderProducts.destroy({
      where: {
        orderId: req.params.orderId,
        productId: req.query.productId
      }
    })
    res.send()
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
