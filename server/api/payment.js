const router = require('express').Router()
const Stripe = require('stripe')
// ADD ENV VAR
const stripe = Stripe(
  'sk_test_51IBgClBOhqQyDiVzyJbg010oMYzMS3uabbC5ngPIULdfl5IUTvp0y5tmoIIRIcrNnjKMmbAQuhM9njNxOOhkRTs700oEcH0V4d'
)

// Mounted on /api/payment

router.post('/add', async (req, res, next) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: 'usd',
      payment_method_types: ['card'],
      receipt_email: 'jenny.rosen@example.com'
    })

    res.json(paymentIntent)
  } catch (err) {
    console.error(err)
  }
})

module.exports = router
