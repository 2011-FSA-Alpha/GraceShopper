import React from 'react'
import {connect} from 'react-redux'
import {addItemToCart} from '../store/cart'
import {fetchProduct} from '../store/singleProduct'
import AdminEditProd from './AdminEditProd'
import {
  Typography,
  Box,
  Button,
  CardContent,
  Paper,
  CardActions,
  Card
} from '@material-ui/core'
import {spacing} from '@material-ui/system'

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
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Paper
              elevation={10}
              style={{
                backgroundColor: '#333333',
                marginTop: '2.5rem',
                width: '60vw',
                paddingBottom: '2rem',
                marginBottom: '1rem'
              }}
            >
              <img
                style={{width: '100%', height: '80%'}}
                src={product.imageUrl}
              />
              <Box style={{margin: '2rem'}}>
                <Typography variant="h3" className="dark">
                  {product.title}
                </Typography>
                <Box>
                  <Typography variant="h5" className="white">
                    Artist's Description: {product.description}
                  </Typography>
                </Box>

                <Typography variant="h5" className="white">
                  Price: ${product.price / 100}
                </Typography>
                <Typography variant="h5" className="white">
                  {product.totalDownloads} Downloads
                </Typography>

                <Typography variant="h5" className="white">
                  Liked by {product.likes} others
                </Typography>
                <Typography variant="h5" className="white">
                  Tags: {product.tags}
                </Typography>
              </Box>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Button
                  type="button"
                  variant="contained"
                  style={{
                    background:
                      'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                  }}
                  color="secondary"
                  style={{
                    background:
                      'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                  }}
                  onClick={() =>
                    this.props.addItemToCart(this.props.user.id, {
                      productId: product.id,
                      orderId: this.props.cart.id
                    })
                  }
                >
                  Add to cart
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  onClick={this.toggleEdit}
                  style={{
                    background:
                      'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    color: 'white'
                  }}
                >
                  Edit Product
                </Button>
              </Box>
              {showEdit ? <AdminEditProd product={product} /> : null}
            </Paper>
          </Box>
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
