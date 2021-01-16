import React from 'react'
import {connect} from 'react-redux'
import {showCart, deleteCartItem, incrementQuantity} from '../store/cart'

export class Cart extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false})
    }, 200)
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
        {this.state.loading ? (
          <h2>Loading cart...</h2>
        ) : (
          <div id="root">
            {cart.products.length > 0 ? (
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
                      this.props.deleteCartItem(this.props.user.id, {
                        productId: product.id,
                        orderId: this.props.cart.id
                      })
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
        )}
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
  deleteCartItem: (userId, requestInfo) =>
    dispatch(deleteCartItem(userId, requestInfo)),
  showCart: userId => dispatch(showCart(userId))
})

export default connect(mapToState, mapToDispatch)(Cart)
