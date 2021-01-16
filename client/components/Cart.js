import React from 'react'
import {connect} from 'react-redux'
import {showCart, deleteCartItem, incrementQuantity} from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    if (this.props.user.id) {
      this.props.showCart(this.props.user.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.props.showCart(this.props.user.id)
    }
  }

  render() {
    const {cart} = this.props
    return (
      <div>
        <h1> Cart </h1>
        <div id="root">
          {cart.products ? (
            cart.products.map(product => (
              <div key={product.id}>
                <h1> Product Name: {product.title} </h1>
                <h3> Price: {product.price} </h3>
                <h3> Quantity: {product.orderproducts.quantity} </h3>
                <button
                  type="button"
                  onClick={() =>
                    this.props.incrementQuantity(this.props.user.id, {
                      productId: product.id,
                      orderId: this.props.cart.id,
                      quantity: 1
                    })
                  }
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() =>
                    this.props.incrementQuantity(this.props.user.id, {
                      productId: product.id,
                      orderId: this.props.cart.id,
                      quantity: -1
                    })
                  }
                >
                  -
                </button>
                <h3> Picture of product </h3>
                <button
                  type="button"
                  onClick={() =>
                    this.props.deleteCartItem(this.props.user.id, product.id)
                  }
                >
                  Delete
                </button>
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
  incrementQuantity: (userId, orderInfo) =>
    dispatch(incrementQuantity(userId, orderInfo)),
  deleteCartItem: (userId, productId) =>
    dispatch(deleteCartItem(userId, productId)),
  showCart: userId => dispatch(showCart(userId))
})

export default connect(mapToState, mapToDispatch)(Cart)
