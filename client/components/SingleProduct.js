import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../store/cart'
import {fetchProduct} from '../store/singleProduct'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    let product = this.props.product
    return (
      <React.Fragment>
        {product ? (
          <div>
            <h3>Product Info:</h3>
            <div>Product Title: {product.title}</div>
            <div>Product Description: {product.description}</div>
            <div>Product Price: ${product.price}</div>
            <img src={product.imageUrl} />
            <div>Total downloads: {product.totalDownloads}</div>
            <div>Total # of Likes: {product.likes}</div>
            <div>Tags: {product.tags}</div>
            <button
              type="button"
              onClick={() =>
                this.props.addItemToCart(this.props.user.id, product.id)
              }
            >
              Add to cart
            </button>
          </div>
        ) : (
          <h1>No product found</h1>
        )}
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  product: state.product,
  user: state.user
})

const mapDispatch = dispatch => ({
  addItemToCart: id => dispatch(addItemToCart(id)),
  fetchProduct: id => dispatch(fetchProduct(id))
})
export default connect(mapState, mapDispatch)(SingleProduct)
