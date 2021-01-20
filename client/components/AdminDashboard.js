import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {getUsersThunk} from '../store/users'

export class AdminDashboard extends React.Component {
  componentDidMount() {
    this.props.me()
    this.props.getProducts()
  }

  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div>Hello! I am a dashboard!</div>
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  products: state.products,
  users: state.users
})

const mapDispatch = dispatch => ({
  getUsersThunk: () => dispatch(getUsersThunk()),
  getProducts: () => dispatch(getProducts())
})

export default connect(mapState, mapDispatch)(AdminDashboard)
