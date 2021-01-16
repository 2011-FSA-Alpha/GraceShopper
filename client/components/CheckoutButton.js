import React from 'react'
import {Link} from 'react-router-dom'

// This is a dummy button that will eventually lead to a Checkout page to prompt the user for payment details

const CheckoutButton = props => {
  return (
    <Link to="/order-confirmed">
      <button>Checkout</button>
    </Link>
  )
}

export default CheckoutButton
