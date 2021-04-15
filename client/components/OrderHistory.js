import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchOrderHistory} from '../store/orderHistory'
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Paper
} from '@material-ui/core'

export class OrderHistory extends Component {
  componentDidMount() {
    this.props.fetchOrderHistory(this.props.user.id)
  }

  render() {
    const {orderHistory} = this.props
    const isHistory = orderHistory.length > 0

    return (
      <Box paddingTop="40px">
        <Grid cols={3} paddingtop="40px" container spacing={1} justify="center">
          {isHistory ? (
            <Box>
              {orderHistory.map(order => {
                return (
                  <Grid
                    key={order.id}
                    container
                    item
                    md={4}
                    spacing={1}
                    justify="center"
                    className="order-history"
                  >
                    <Card style={{backgroundColor: '#333333'}}>
                      <CardContent>
                        <Typography variant="h5" style={{color: 'lightgray'}}>
                          Order #: {order.id}
                        </Typography>
                        {order.products.map(product => {
                          return (
                            <React.Fragment key={product.id}>
                              <img
                                src={product.imageUrl}
                                style={{width: '100%', height: '100%'}}
                              />
                              <Typography
                                variant="h6"
                                style={{color: 'lightgray'}}
                              >
                                {product.title}
                              </Typography>
                              <Typography
                                variant="h6"
                                style={{color: 'lightgray'}}
                              >
                                {product.description}
                              </Typography>
                              <Typography
                                variant="h6"
                                style={{color: 'lightgray'}}
                              >
                                {product.price}
                              </Typography>
                            </React.Fragment>
                          )
                        })}
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Box>
          ) : (
            <Paper
              elevation={10}
              style={{backgroundColor: '#333333', padding: '6rem'}}
            >
              <Typography variant="h5" style={{color: 'white'}}>
                You have no order history.
              </Typography>
            </Paper>
          )}
        </Grid>
      </Box>
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
