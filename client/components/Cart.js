import React from 'react'
import {connect} from 'react-redux'
import {showCart, deleteCartItem, incrementQuantity} from '../store/cart'
import CheckoutButton from './CheckoutButton'
import {
  Card,
  Grid,
  Typography,
  Box,
  Button,
  CardContent,
  CardActionArea,
  Select,
  MenuItem,
  FormGroup,
  Paper,
  CardActions,
  Chip,
  CircularProgress
} from '@material-ui/core'

export class Cart extends React.Component {
  constructor() {
    super()

    this.state = {
      loading: true
    }
  }

  async componentDidMount() {
    if (this.props.user.id) {
      await this.props.showCart(this.props.user.id)
      this.setState({loading: false})
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      await this.props.showCart(this.props.user.id)
      this.setState({loading: false})
    }
  }

  render() {
    const {cart} = this.props
    const productCheck = cart.products ? cart.products.length >= 1 : false
    const totalPrice = productCheck
      ? cart.products.reduce((a, b) => {
          let productPrice = b.price * b.orderproducts.quantity
          return productPrice + a
        }, 0)
      : '0.00'
    return (
      <Box
        style={{transform: 'translate(50%,-50%)'}}
        display="flex"
        width="50vw"
        justifyContent="center"
        paddingTop="400px"
      >
        <Card style={{backgroundColor: '#333333'}} width="600px">
          {this.state.loading ? (
            <h2>Loading cart...</h2>
          ) : (
            <Box width="300px" display="relative" id="root">
              {cart.products.length > 0 ? (
                cart.products.map(product => (
                  <CardContent key={product.id}>
                    <Typography style={{color: 'white'}} variant="h6">
                      {' '}
                      Product Name: {product.title}{' '}
                    </Typography>
                    <Typography style={{color: 'white'}} variant="h6">
                      {' '}
                      Price: ${product.price / 100}{' '}
                    </Typography>
                    <Typography style={{color: 'white'}} variant="h6">
                      {' '}
                      Quantity: {product.orderproducts.quantity}{' '}
                    </Typography>
                    <CardActions>
                      <Button
                        variant="contained"
                        type="button"
                        onClick={() =>
                          this.props.incrementQuantity(this.props.user.id, {
                            productId: product.id,
                            orderId: this.props.cart.id,
                            quantity: 1
                          })
                        }
                      >
                        +
                      </Button>
                      <Button
                        variant="contained"
                        type="button"
                        onClick={() =>
                          this.props.incrementQuantity(this.props.user.id, {
                            productId: product.id,
                            orderId: this.props.cart.id,
                            quantity: -1
                          })
                        }
                      >
                        -
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{
                          background:
                            'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                        }}
                        type="button"
                        onClick={() =>
                          this.props.deleteCartItem(this.props.user.id, {
                            productId: product.id,
                            orderId: this.props.cart.id
                          })
                        }
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </CardContent>
                ))
              ) : (
                <CardContent>
                  <Typography style={{color: 'white'}} variant="h5">
                    Your cart is empty
                  </Typography>
                </CardContent>
              )}
              {cart.products.length > 0 ? (
                <CardContent>
                  <Typography style={{color: 'white'}} variant="h6">
                    Subtotal:
                  </Typography>
                  <Typography style={{color: 'white'}} variant="h6">
                    ${totalPrice / 100}
                  </Typography>
                  <CheckoutButton cart={cart} />
                </CardContent>
              ) : null}
            </Box>
          )}
        </Card>
      </Box>
    )
  }
}

const mapToState = state => ({
  user: state.user,
  cart: state.cart
})

const mapToDispatch = dispatch => ({
  incrementQuantity: (userId, orderInfo) =>
    dispatch(incrementQuantity(userId, orderInfo)),
  deleteCartItem: (userId, requestInfo) =>
    dispatch(deleteCartItem(userId, requestInfo)),
  showCart: userId => dispatch(showCart(userId))
})

export default connect(mapToState, mapToDispatch)(Cart)
