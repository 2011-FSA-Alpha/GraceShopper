import React from 'react'
import {Link} from 'react-router-dom'
import {canTreatArrayAsAnd} from 'sequelize/types/lib/utils'

// This is a dummy button that will eventually lead to a Checkout page to prompt the user for payment details

const CheckoutButton = props => {
  const {cart} = props
  return (
    <Link to="/order-confirmed">
      <button disabled={cart.length ? 'false' : 'true'}>Checkout</button>
    </Link>
  )
}

export default CheckoutButton
