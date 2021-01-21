import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {getUsersThunk} from '../store/users'
import AddProductForm from './AddProductForm'
import AdminEditProd from './AdminEditProd'
import EditUser from './EditUser'

export class AdminDashboard extends React.Component {
  componentDidMount() {
    this.props.getUsersThunk()
    this.props.getProducts()
  }

  render() {
    return (
      <div id="container">
        <h1>All Users:</h1>
        {this.props.users.allUsers.map(user => (
          <div key={user.id}>
            {/* <EditUser user={user} /> */}
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
          </div>
        ))}

        <h1>All Products:</h1>
        <AddProductForm />
        {this.props.products.map(product => (
          <div key={product.id}>
            {/* <AdminEditProd product={} /> */}
            <div>Product Title: {product.title}</div>
            <div>Product Description: {product.description}</div>
            <div>Product Price: ${product.price}</div>
            <img src={product.imageUrl} />
            <div>Total downloads: {product.totalDownloads}</div>
            <div>Total # of Likes: {product.likes}</div>
            <div>Tags: {product.tags}</div>
          </div>
        ))}
      </div>
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
