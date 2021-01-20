const router = require('express').Router()
const stripe = require('stripe')(
  'sk_test_51IBgClBOhqQyDiVzyJbg010oMYzMS3uabbC5ngPIULdfl5IUTvp0y5tmoIIRIcrNnjKMmbAQuhM9njNxOOhkRTs700oEcH0V4d'
)

// Mounted on /api/payment

const calculateOrderAmount = items => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client

  // const totalCost = items.reduce(
  //   (a, b) => b.price * b.orderproducts.quantity + a.price
  // )
  // console.log(totalCost)
  return 2000
}

// REQ.BODY should include array of items to checkout
router.post('/create-payment-intent', async (req, res, next) => {
  const {items} = req.body
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: 'usd'
    })

    res.json({clientSecret: paymentIntent.client_secret})
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
