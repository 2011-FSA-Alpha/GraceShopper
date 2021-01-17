import React, {useEffect} from 'react'
import store from '../store'
import {checkoutOrder} from '../store/cart'

export default function OrderConfirmed(props) {
  console.log('PROPS LOCATION', props.location.cartProps)
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
    <div>
      <h1>🥳 Order Confirmed 🥳</h1>
      <h3 className="order-id">Your order number is: #{cartId}</h3>
      <h3 className="order-total">Your total is: ${total / 100}</h3>
    </div>
  )
}
