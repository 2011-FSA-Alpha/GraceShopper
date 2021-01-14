import React from 'react'
import {connect} from 'react-redux'
import {showCart} from '../store/cart'

export class Cart extends React.Component {
  componentDidMount() {
    this.props.showCart()
  }

  render() {
    const {cart} = this.props

    return (
      <div>
        <h1> Cart </h1>
        <div id="root">
          {cart.map(product => (
            <div key={product.id}>
              <h1> Product Name: {product.name} </h1>
              <h3> Price: {product.price} </h3>
              <h3> Quantity: {product.quantity} </h3>
              <h3> Picture of product </h3>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapToState = state => ({
  cart: state.cart
})

const mapToDispatch = dispatch => ({
  showCart: () => dispatch(showCart())
})

export default connect(mapToState, mapToDispatch)(Cart)
