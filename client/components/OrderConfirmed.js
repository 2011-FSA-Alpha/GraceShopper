import React from 'react'

const OrderConfirmed = props => {
  return (
    <div>
      <h1>🥳 Order Confirmed 🥳</h1>
      <h3>Your order number is: {props.orderId}</h3>
      <h3>Your total is: {props.total}</h3>
    </div>
  )
}

export default OrderConfirmed
