import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {connect} from 'react-redux'
import {showCart, deleteCartItem, incrementQuantity} from '../store/cart'
import StripeCheckout from 'react-stripe-checkout'
import CheckoutButton from './CheckoutButton'

export class Cart extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    if (this.props.user.id) {
      await this.props.showCart(this.props.user.id)
      this.setState({loading: false})
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      await this.props.showCart(this.props.user.id)
      this.setState({loading: false})
    }
  }

  handleToken = (token, addresses) => {
    console.log({token, addresses})
  }
  render() {
    const {cart} = this.props
    console.log(this.props.cart.products)
    const productCheck = cart.products ? cart.products.length >= 1 : false
    const totalPrice = productCheck
      ? cart.products.reduce(
          (a, b) => b.price * b.orderproducts.quantity + a.price
        )
      : '0.00'

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
                  <div>
                    <div>Subtotal:</div>
                    <div>${totalPrice / 100}</div>
                  </div>
                </div>
              ))
            ) : (
              <h2>Your cart is empty</h2>
            )}
            <div>
              <StripeCheckout
                stripeKey="pk_test_51IBgClBOhqQyDiVzsvnoaVghaiscD06pGqSREyOAk3iPMECcM8tZPW8ZHEzzbm7G5KYeqHf5w9SnSsd4r7I6vYSV00rfo3YMLB"
                token={this.handleToken}
                billingAddress
                amount={totalPrice}
                name={cart.id}
              />
              <CheckoutButton cart={cart} />
            </div>
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
