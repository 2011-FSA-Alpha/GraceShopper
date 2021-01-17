const router = require('express').Router()

//require order, product and orderProducts model from database
const {Order, Product, OrderProducts} = require('../db/models')

// (ADMIN ROUTE)
// GET api/orders
// returns ALL orders with no filter

router.get('/', async (req, res, next) => {
  try {
    const orderItems = await OrderProducts.findAll({})
    res.send(orderItems)
  } catch (error) {
    next(error)
  }
})

// (ADMIN ROUTE)
// PUT api/:orderItemId
// can update any order

router.put('/:orderItemId', async (req, res, next) => {
  try {
    const updateItem = await Order.findByPk(req.params.orderItemId)
    res.send(updateItem.update(req.body))
  } catch (error) {
    next(error)
  }
})

// GET api/orders/cart/:userId
// finds or creates a unique cart for the logged in user
// includes Product model in order to have access to
// quatity information

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

// POST api/orders/cart/:userId
// finds or creates an instance of the product -> req.body.productId
// within the cart -> req.body.orderId
// If an instance exists it increments quantity

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

// PUT api/orders/cart/:userId
// increments quantity userOrder.quantity with amount
// spcified within req.body.quantity (either 1 or -1)

router.put('/cart/:userId', async (req, res, next) => {
  try {
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

// DELETE api/orders/car/:userId
// deletes specified instance from orderProducts Model

router.delete('/cart/:userId', async (req, res, next) => {
  try {
    await OrderProducts.destroy({
      where: {
        orderId: req.query.orderId,
        productId: req.query.productId
      }
    })
    res.send()
  } catch (error) {
    next(error)
  }
})

module.exports = router
