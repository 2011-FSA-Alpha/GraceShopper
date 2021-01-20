const router = require('express').Router()
const {Order, Product, OrderProducts} = require('../db/models')
const adminOnly = require('../util/adminOnly')

// GET /api/order
// returns ALL order with no filter
// NOTE: Must be an Admin to access
router.get('/', adminOnly, async (req, res, next) => {
  try {
    const orderItems = await OrderProducts.findAll({})
    res.send(orderItems)
  } catch (error) {
    next(error)
  }
})

// PUT /api/order/:orderItemId
// can update any order
// NOTE: Must be admin to access
router.put('/:orderItemId', adminOnly, async (req, res, next) => {
  try {
    const updateItem = await Order.findByPk(req.params.orderItemId)
    res.send(updateItem.update(req.body))
  } catch (error) {
    next(error)
  }
})

// GET api/order/cart/:userId
// finds or creates a unique cart for the logged in user
// includes Product model in order to have access to
// quantity information
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
        }
      ]
    })
    res.send(userOrder[0])
  } catch (error) {
    next(error)
  }
})

// POST api/order/cart/:userId
// finds or creates an instance of the product -> req.body.productId
// within the cart -> req.body.orderId
// If an instance exists it increments quantity
router.post('/cart/:userId', async (req, res, next) => {
  console.log('USER--->', req.user)
  console.log('BODY--->', req.body)
  try {
    if (req.user === undefined || req.user.id != req.params.userId) {
      res.send("INVALID CART! You cannot modify another user's cart")
    } else {
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
    }
  } catch (error) {
    next(error)
  }
})

// PUT api/order/cart/:userId
// increments quantity userOrder.quantity with amount
// specified within req.body.quantity (either 1 or -1)
router.put('/cart/:userId', async (req, res, next) => {
  try {
    if (req.user.id != req.params.userId) {
      res.send("INVALID CART! You cannot modify another user's cart")
    } else {
      let userOrder = await OrderProducts.findAll({
        where: {
          orderId: req.body.orderId,
          productId: req.body.productId
        }
      })
      userOrder[0].quantity += parseInt(req.body.quantity)
      await userOrder[0].save()
      res.send(userOrder)
    }
  } catch (error) {
    next(error)
  }
})

// DELETE api/order/cart/:userId
// deletes specified instance from orderProducts Model

router.delete('/cart/:userId', async (req, res, next) => {
  try {
    if (req.user.id != req.params.userId) {
      res.send("INVALID CART! You cannot modify another user's cart")
    } else if (res.user === req.params.userId || req.user.adminStatus) {
      await OrderProducts.destroy({
        where: {
          orderId: req.query.orderId,
          productId: req.query.productId
        }
      })
      res.send()
    }
  } catch (error) {
    next(error)
  }
})

// PUT api/order/cart/:userId/checkout
// Sets the Users cart to Paid moving it into order history

router.put('/cart/:userId/checkout', async (req, res, next) => {
  try {
    if (!req.user || req.user.id != req.params.userId) {
      res.send("INVALID CART! You cannot view another user's order history")
    } else {
      const userOrder = await Order.findOrCreate({
        where: {
          userId: req.params.userId,
          paid: false
        },
        include: [
          {
            model: Product
          }
        ]
      })
      userOrder[0].paid = true
      await userOrder[0].save()
      res.send(userOrder)
    }
  } catch (error) {
    next(err)
  }
})

// GET /api/order/history/:userId
// Gets a Users order history

router.get('/history/:userId', async (req, res, next) => {
  try {
    if (!req.user || req.user.id != req.params.userId) {
      res.send("INVALID CART! You cannot view another user's order history")
    } else {
      const history = await Order.findAll({
        where: {paid: true, userId: req.params.userId},
        include: Product
      })
      res.send(history)
    }
  } catch (error) {
    next(error)
  }
})

module.exports = router
