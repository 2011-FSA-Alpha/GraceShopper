import React from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../store/singleProduct'

export class SingleProduct extends React.Component {
  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.productId)
  }

  componentDidUpdate(prevProps) {
    console.log('ran')
    if (prevProps.product !== this.props.product) {
      this.forceUpdate()
    }
  }

  render() {
    console.log('rendered')
    let singleProduct = this.props.singleProduct
    return (
      <React.Fragment>
        {singleProduct ? (
          <div>
            <h3>Product Info:</h3>
            <div>Product Title: {singleProduct.title}</div>
            <div>Product Description: {singleProduct.description}</div>
            <div>Product Price: ${singleProduct.price}</div>
            <img src={singleProduct.imageUrl} />
            <div>Total downloads: {singleProduct.totalDownloads}</div>
            <div>Total # of Likes: {singleProduct.likes}</div>
            <div>Tags: {singleProduct.tags}</div>
          </div>
        ) : (
          <h1>No product found</h1>
        )}
      </React.Fragment>
    )
  }
}

const mapState = state => ({product: state.product})

const mapDispatch = dispatch => ({
  fetchProduct: id => dispatch(fetchProduct(id))
})
export default connect(mapState, mapDispatch)(SingleProduct)
