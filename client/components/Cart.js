import React from 'react'
import {connect} from 'react-redux'
import {showCart} from '../store/cart'

export class Cart extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.props.showCart(this.props.user.id)
    }
  }

  render() {
    const cart = this.props

    return (
      <div>
        <h1> Cart </h1>
        <div id="root">
          {cart.products ? (
            cart.products.map(product => (
              <div key={product.id}>
                <h1> Product Name: {product.title} </h1>
                <h3> Price: {product.price} </h3>
                {
                  //<h3> Quantity: {product.quantity} </h3>
                }
                <h3> Picture of product </h3>
              </div>
            ))
          ) : (
            <h2>Your cart is empty</h2>
          )}
        </div>
      </div>
    )
  }
}

const mapToState = state => ({
  user: state.user,
  cart: state.cart
})

const mapToDispatch = dispatch => ({
  showCart: userId => dispatch(showCart(userId))
})

export default connect(mapToState, mapToDispatch)(Cart)
