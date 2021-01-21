import React, {useEffect} from 'react'
import store from '../store'
import {checkoutOrder} from '../store/cart'
import {Paper, Typography, Box, Button} from '@material-ui/core'

export default function OrderConfirmed(props) {
  const userId = props.location.cartProps.cart.userId
  const cartId = props.location.cartProps.cart.id
  const cartLength = props.location.cartProps.cart.products.length
  let total

  if (cartLength === 1) {
    const price = props.location.cartProps.cart.products[0].price
    const quantity =
      props.location.cartProps.cart.products[0].orderproducts.quantity

    total = price * quantity
  } else {
    const products = props.location.cartProps.cart.products

    total = products.reduce(
      (a, b) => b.price * b.orderproducts.quantity + a.price
    )
  }

  useEffect(() => {
    store.dispatch(checkoutOrder(userId))
  })

  return (
    <Box
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Box
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '6rem',
          flexDirection: 'row',
          width: '50%'
        }}
      >
        <Paper
          elevation={10}
          style={{backgroundColor: '#333333', padding: '2rem'}}
        >
          <Typography style={{color: 'white'}} variant="h2">
            🥳 Order Confirmed 🥳
          </Typography>
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '2rem',
              flexDirection: 'column'
            }}
          >
            <Typography style={{color: 'white'}} className="order-id">
              Your order number is: #{cartId}
            </Typography>
            <Typography style={{color: 'white'}} className="order-total">
              Your total is: ${total / 100}
            </Typography>
          </Box>
          <Button
            type="button"
            variant="contained"
            style={{
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
              width: '100%',
              marginTop: '2rem'
            }}
            color="secondary"
            onClick={() => props.history.push('/products')}
          >
            Keep Browsing
          </Button>
        </Paper>
      </Box>
    </Box>
  )
}
