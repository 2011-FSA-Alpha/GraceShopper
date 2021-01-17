import React, {useEffect} from 'react'
import store from '../store'
import {checkoutOrder} from '../store/cart'

export default function OrderConfirmed(props) {
  console.log('PROPS LOCATION', props.location.cartProps)
  const userId = props.location.cartProps.cart.userId
  const cartId = props.location.cartProps.cart.id
  let total
  if (props.location.cartProps.cart.products.length === 1) {
    total =
      props.location.cartProps.cart.products[0].price *
      props.location.cartProps.cart.products[0].orderproducts.quantity
  } else {
    total = props.location.cartProps.cart.products.reduce(
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
