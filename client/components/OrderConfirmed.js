import React from 'react'

export default function OrderConfirmed(props) {
  const total = props.location.cartProps.cart.products.reduce(
    (a, b) => b.price + a.price
  )

  console.log(props.location.cartProps.cart.products)
  return (
    <div>
      <h1>🥳 Order Confirmed 🥳</h1>
      <h3 className="order-id">
        Your order number is: #{props.location.cartProps.cart.id}
      </h3>
      <h3 className="order-total">Your total is: ${total / 100}</h3>
    </div>
  )
}
