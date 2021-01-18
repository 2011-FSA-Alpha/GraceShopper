import React, {Component} from 'react'
import {connect} from 'react-redux'

export class OrderHistory extends Component {
  render() {
    return (
      <div>
        {/* Map through the order history */}
        <h1>Map the history</h1>
      </div>
    )
  }
}

const mapState = state => ({
  orderHistory: state.orders
})

export default connect(mapState, null)(OrderHistory)
