import React from 'react'

const OrderConfirmed = props => {
  return (
    <div>
      <h1>🥳 Order Confirmed 🥳</h1>
      <h3>Your order number is: {props.order}</h3>
    </div>
  )
}

export default OrderConfirmed
