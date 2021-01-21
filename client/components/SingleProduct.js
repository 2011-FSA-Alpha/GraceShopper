import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../store/cart'
import {fetchProduct} from '../store/singleProduct'
import AdminEditProd from './AdminEditProd'

export class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showEdit: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState(prevState => ({showEdit: !prevState.showEdit}))
  }

  componentDidMount() {
    this.props.fetchProduct(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.products !== this.props.products) {
      this.props.showCart(this.props.user.id)
    }
  }

  render() {
    const {showEdit} = this.state

    let product = this.props.product
    return (
      <div className="fade-in">
        {product ? (
          <div>
            <h3>Product Info:</h3>

            <button type="button" onClick={this.toggleEdit}>
              {' '}
              Edit Product{' '}
            </button>

            {showEdit ? <AdminEditProd product={product} /> : null}

            <div>Product Title: {product.title}</div>
            <div>Product Description: {product.description}</div>
            <div>Product Price: ${product.price}</div>
            <img style={{width: '50%', height: '50%'}} src={product.imageUrl} />
            <div>Total downloads: {product.totalDownloads}</div>
            <div>Total # of Likes: {product.likes}</div>
            <div>Tags: {product.tags}</div>
            <button
              type="button"
              onClick={() =>
                this.props.addItemToCart(this.props.user.id, {
                  productId: product.id,
                  orderId: this.props.cart.id
                })
              }
            >
              Add to cart
            </button>
          </div>
        ) : (
          <h1>No product found</h1>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  cart: state.cart,
  product: state.product,
  user: state.user
})

const mapDispatch = dispatch => ({
  addItemToCart: (id, orderInfo) => dispatch(addItemToCart(id, orderInfo)),
  fetchProduct: id => dispatch(fetchProduct(id))
})
export default connect(mapState, mapDispatch)(SingleProduct)
