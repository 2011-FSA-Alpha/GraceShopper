import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrderHistory} from '../store/orderHistory'

export class OrderHistory extends Component {
  componentDidMount() {
    console.log('OrderHistory PROPS', this.props)
    this.props.fetchOrderHistory(this.props.user.id)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {/* Map through the order history */}
        <h1>Map the history</h1>
      </div>
    )
  }
}

const mapState = state => ({
  user: state.user,
  orderHistory: state.orderHistory
})

const mapDispatch = dispatch => ({
  fetchOrderHistory: userId => dispatch(fetchOrderHistory(userId))
})

export default connect(mapState, mapDispatch)(OrderHistory)
