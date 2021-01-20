const router = require('express').Router()
const stripe = require('stripe')(
  'sk_test_51IBgClBOhqQyDiVzyJbg010oMYzMS3uabbC5ngPIULdfl5IUTvp0y5tmoIIRIcrNnjKMmbAQuhM9njNxOOhkRTs700oEcH0V4d'
)
const {uuid} = require('uuidv4')

// POST /api/payment
router.get('/', (req, res) => {
  res.send("Add your Stripe Secret Key to the .require('stripe') statement!")
})

// POST /api/payment/checkout
router.post('/checkout', async (req, res) => {
  console.log('Request:', req.body)

  let error
  let status
  try {
    const {product, token} = req.body

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    })

    const idempotency_key = uuid()
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: 'usd',
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            city: token.card.address_city,
            country: token.card.address_country,
            postal_code: token.card.address_zip
          }
        }
      },
      {
        idempotency_key
      }
    )
    console.log('Charge:', {charge})
    status = 'success'
  } catch (error) {
    console.error('Error:', error)
    status = 'failure'
  }

  res.json({error, status})
})

// Mounted on /api/payment

// const calculateOrderAmount = items => {
//   // Replace this constant with a calculation of the order's amount
//   // Calculate the order total on the server to prevent
//   // people from directly manipulating the amount on the client

//   // const totalCost = items.reduce(
//   //   (a, b) => b.price * b.orderproducts.quantity + a.price
//   // )
//   // console.log(totalCost)
//   return 2000
// }

// // REQ.BODY should include array of items to checkout
// router.post('/create-payment-intent', async (req, res, next) => {
//   const {items} = req.body
//   try {
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: calculateOrderAmount(items),
//       currency: 'usd'
//     })

//     res.json({clientSecret: paymentIntent.client_secret})
//   } catch (err) {
//     console.error(err)
//   }
// })

// const YOUR_DOMAIN = 'http://localhost:8080/'
// router.post('/create-checkout-session', async (req, res) => {
//   console.log('CREATE CHECKOUT SESSION HIT!')
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Stubborn Attachments',
//             images: ['https://i.imgur.com/EHyR2nP.png'],
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/order-confirmed`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   })
//   res.json({id: session.id})
// })

module.exports = router
