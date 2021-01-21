import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {Link} from 'react-router-dom'
import {addItemToCart, showCart} from '../store/cart'
import {fetchProduct} from '../store/singleProduct'
import Footer from './Footer'
import {
  Grid,
  Typography,
  Box,
  Button,
  CardContent,
  Select,
  MenuItem,
  FormGroup,
  Paper,
  CardActions,
  Chip,
  CircularProgress
} from '@material-ui/core'
import {spacing} from '@material-ui/system'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      currentlyDisplayed: []
    }
  }

  componentDidMount() {
    this.props.getProducts()
    setTimeout(() => {
      this.setState({allProducts: [...this.props.products], isLoading: false})
    }, 300)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.props.showCart(this.props.user.id)
    }
    if (prevProps.products !== this.props.products) {
      this.setState({currentlyDisplayed: [...this.props.products]})
    }
  }

  handleChange = e => {
    const filteredProducts = this.props.products.filter(image => {
      if (image.tags.includes(e)) {
        return image
      }
    })
    this.setState({currentlyDisplayed: filteredProducts})
  }

  render() {
    return (
      <div className="fade-in">
        {this.state.isLoading ? (
          <Box
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              marginTop: '8rem'
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <div className="fade-in">
            <Box className="container">
              <FormGroup m={2}>
                <Box
                  width="700px"
                  display="flex"
                  justifyContent="space-around"
                  paddingTop="30px"
                  paddingBottom="20px"
                  paddingLeft="20px"
                >
                  <Typography style={{color: 'white'}} variant="h5">
                    Filter By:
                  </Typography>
                  <Chip
                    color="secondary"
                    style={{
                      background:
                        'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                    }}
                    label="All"
                    onClick={() => this.props.getProducts()}
                  />

                  <Chip
                    color="secondary"
                    style={{
                      background:
                        'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                    }}
                    label="Small"
                    onClick={() => this.handleChange('small')}
                  />
                  <Chip
                    color="secondary"
                    style={{
                      background:
                        'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                    }}
                    label="Large"
                    onClick={() => this.handleChange('large')}
                  />
                  <Chip
                    color="secondary"
                    style={{
                      background:
                        'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                    }}
                    label="Landscape"
                    onClick={() => this.handleChange('landscape')}
                  />
                  <Chip
                    color="secondary"
                    style={{
                      background:
                        'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                    }}
                    label="Mountains"
                    onClick={() => this.handleChange('mountains')}
                  />
                  <Chip
                    color="secondary"
                    style={{
                      background:
                        'linear-gradient(45deg, #2D8DFF 30%, #9DCAFF 90%)'
                    }}
                    label="Water"
                    onClick={() => this.handleChange('water')}
                  />
                </Box>
              </FormGroup>
              {this.state.currentlyDisplayed ? (
                <Grid
                  cols={3}
                  paddingtop="40px"
                  container
                  spacing={3}
                  justify="center"
                >
                  {this.state.currentlyDisplayed.map(product => {
                    return (
                      <Grid
                        key={product.title + Math.random() * 1000}
                        container
                        item
                        md={4}
                        spacing={1}
                        justify="center"
                      >
                        <Paper
                          elevation={10}
                          style={{backgroundColor: '#333333'}}
                        >
                          <CardContent>
                            <Link to={`/products/${product.id}`}>
                              <img
                                style={{height: '20vw'}}
                                src={product.imageUrl}
                              />
                              <Typography
                                variant="h5"
                                style={{color: 'lightgray'}}
                              >
                                {product.title}
                              </Typography>
                            </Link>
                            <CardActions>
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
                                Add To Cart
                              </Button>
                            </CardActions>
                          </CardContent>
                        </Paper>
                      </Grid>
                    )
                  })}
                </Grid>
              ) : (
                <Box
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    marginTop: '8rem'
                  }}
                >
                  <CircularProgress />
                </Box>
              )}
              <Footer />
            </Box>
          </div>
        )}
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products,
  user: state.user,
  cart: state.cart
})

const mapDispatch = dispatch => ({
  showCart: id => dispatch(showCart(id)),
  fetchProduct: id => dispatch(fetchProduct(id)),
  addItemToCart: (userId, productId) =>
    dispatch(addItemToCart(userId, productId)),
  getProducts: () => dispatch(getProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
