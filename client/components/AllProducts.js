import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {Link} from 'react-router-dom'
import {addItemToCart, showCart} from '../store/cart'
import {fetchProduct} from './SingleProduct'
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
  Chip
} from '@material-ui/core'
import {spacing} from '@material-ui/system'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentlyDisplayed: []
    }
  }

  componentDidMount() {
    this.props.getProducts()
    this.setState({allProducts: [...this.props.products]})
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
        <Box className="container">
          <FormGroup m={2}>
            <Box paddingTop="30px" paddingBottom="20px" paddingLeft="20px">
              <Select sm={6} onChange={this.handleChange} value="">
                <MenuItem disabled>Filter By</MenuItem>
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="large">Large</MenuItem>
                <MenuItem value="landscape">Landscape</MenuItem>
              </Select>
              <Chip
                color="primary"
                label="All"
                clickable="true"
                onClick={() => this.props.getProducts()}
              />

              <Chip
                color="primary"
                label="Small"
                clickable="true"
                onClick={() => this.handleChange('small')}
              />
              <Chip
                color="primary"
                label="Large"
                clickable="true"
                onClick={() => this.handleChange('large')}
              />
              <Chip
                color="primary"
                label="Landscape"
                clickable="true"
                onClick={() => this.handleChange('landscape')}
              />
              <Chip
                color="primary"
                label="Mountains"
                clickable="true"
                onClick={() => this.handleChange('mountains')}
              />
              <Chip
                color="primary"
                label="Water"
                clickable="true"
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
                    <Paper elevation={10} style={{backgroundColor: '#333333'}}>
                      <CardContent>
                        <Link to={`/products/${product.id}`}>
                          <img
                            style={{height: '20vw'}}
                            src={product.imageUrl}
                          />
                          <Typography variant="h5" style={{color: 'lightgray'}}>
                            {product.title}
                          </Typography>
                        </Link>
                        <CardActions>
                          <Button
                            type="button"
                            variant="contained"
                            style={{
                              background:
                                'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                            }}
                            color="secondary"
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
            <div className="loading">Loading Products...</div>
          )}
          <Footer />
        </Box>
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
