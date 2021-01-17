import React from 'react'

export default function OrderConfirmed(props) {
  return (
    <div>
      <h1>🥳 Order Confirmed 🥳</h1>
      <h3 className="order-id">Your order number is: #{props.orderId}</h3>
      <h3 className="order-total">Your total is: {props.total}</h3>
    </div>
  )
}
