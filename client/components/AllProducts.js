import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {Link} from 'react-router-dom'
import {addItemToCart, showCart} from '../store/cart'
import {SingleProduct, fetchProduct} from './SingleProduct'
import FilterBar from './FilterBar'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentlyDisplayed: this.props.products
    }
  }

  componentDidMount() {
    this.props.getProducts()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.props.showCart(this.props.user.id)
    }
  }

  handleChange = e => {
    console.log(e.target.value)
  }

  render() {
    return (
      <React.Fragment>
        <FilterBar {...this.props} handleChange={this.handleChange} />
        {this.props.products[0] ? (
          this.props.products.map(product => {
            return (
              <div key={product.title}>
                <Link to={`/products/${product.id}`}>
                  <img
                    style={{height: '65%', width: '65%'}}
                    src={product.imageUrl}
                  />
                  <h2>{product.title}</h2>
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    this.props.addItemToCart(this.props.user.id, {
                      productId: product.id,
                      props: this.props,
                      orderId: this.props.cart.id
                    })
                  }
                >
                  Add To Cart
                </button>
              </div>
            )
          })
        ) : (
          <div>Loading Products...</div>
        )}
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  products: state.products,
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  showCart: id => dispatch(showCart(id)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  addItemToCart: (userId, productId) =>
    dispatch(addItemToCart(userId, productId)),
  getProducts: () => dispatch(getProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
