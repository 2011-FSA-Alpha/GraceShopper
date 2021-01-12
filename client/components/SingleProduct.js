import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/singleProduct'

class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
  }

  render() {
    const {product} = this.props
    return (
      <div>
        <h3>Product info:</h3>
        <div>Product Name: {product.name}</div>
        <div>Product Description: {product.description}</div>
        <div>Product Author: {product.author}</div>
        <div>Product Price: ${product.price}</div>
        <img src={product.image} />
        <div>Total downloads: {product.totalDownloads}</div>
        <div>Total # of Likes: {product.likes}</div>
        <div>Tags: {product.tags}</div>
      </div>
    )
  }
}

const mapState = state => ({product: state.product})
const mapDispatch = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
})
export default connect(mapState, mapDispatch)(SingleProduct)
