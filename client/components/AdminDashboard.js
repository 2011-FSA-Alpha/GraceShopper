import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {getUsersThunk} from '../store/users'

export class AdminDashboard extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk()
    this.props.getProducts()
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {this.props.products.map(product => (
          <div key={product.id}>
            <div>Product Title: {product.title}</div>
            <div>Product Description: {product.description}</div>
            <div>Product Price: ${product.price}</div>
            <img src={product.imageUrl} />
            <div>Total downloads: {product.totalDownloads}</div>
            <div>Total # of Likes: {product.likes}</div>
            <div>Tags: {product.tags}</div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  users: state.users,
  products: state.products
})

const mapDispatch = dispatch => ({
  getUsersThunk: () => dispatch(getUsersThunk()),
  getProducts: () => dispatch(getProducts())
})

export default connect(mapState, mapDispatch)(AdminDashboard)
