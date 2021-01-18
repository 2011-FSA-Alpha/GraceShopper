import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {Link} from 'react-router-dom'
import {addItemToCart, showCart} from '../store/cart'
import {fetchProduct} from './SingleProduct'
import FilterBar from './FilterBar'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentlyDisplayed: []
    }
  }

  componentDidMount() {
    this.props.getProducts()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.props.showCart(this.props.user.id)
      this.setState({currentlyDisplayed: [...this.props.products]})
    }
  }

  handleChange = e => {
    const filteredProducts = this.props.products.filter(image => {
      if (image.tags.includes(e.target.value)) {
        return image
      }
    })
    this.setState({currentlyDisplayed: filteredProducts})
  }

  render() {
    return (
      <React.Fragment>
        <FilterBar {...this.props} handleChange={this.handleChange} />
        {this.state.currentlyDisplayed ? (
          this.state.currentlyDisplayed.map(product => {
            return (
              <div key={Math.ceil(Math.random() * 1000)}>
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
