import React from 'react'
import {Link} from 'react-router-dom'

// This is a dummy button that will eventually lead to a Checkout page to prompt the user for payment details

const CheckoutButton = props => {
  const {cart} = props
  return (
    <Link
      to={{
        pathname: '/order-confirmed',
        cartProps: {
          cart: cart
        }
      }}
    >
      <button disabled={!!cart.length}>Checkout</button>
    </Link>
  )
}

export default CheckoutButton
