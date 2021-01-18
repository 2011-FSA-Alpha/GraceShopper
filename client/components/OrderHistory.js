import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrderHistory} from '../store/orderHistory'

export class OrderHistory extends Component {
  componentDidMount() {
    this.props.fetchOrderHistory(this.props.user.id)
  }

  render() {
    const {orderHistory} = this.props

    return (
      <div>
        {orderHistory.map(order => {
          return (
            <div key={order.id} style={{width: '80%'}}>
              <h3>Order #: {order.id}</h3>
              {order.products.map(product => {
                return (
                  <div
                    key={product.id}
                    style={{display: 'flex', flexDirection: 'row'}}
                  >
                    <img
                      src={product.imageUrl}
                      style={{width: '15%', height: '15%'}}
                    />

                    <div>
                      <h4>{product.title}</h4>
                      <h4>{product.description}</h4>
                      <h4>{product.price}</h4>
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}
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
