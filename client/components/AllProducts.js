import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {Link} from 'react-router-dom'
import {addItemToCart, showCart} from '../store/cart'
import {fetchProduct} from './SingleProduct'
import FilterBar from './FilterBar'
import {
  Grid,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  FormGroup,
  InputLabel,
  Paper,
  GridList,
  GridListTile
} from '@material-ui/core'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentlyDisplayed: []
    }
  }

  componentDidMount() {
    this.props.getProducts()
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
      if (image.tags.includes(e.target.value)) {
        return image
      }
    })
    this.setState({currentlyDisplayed: filteredProducts})
  }

  render() {
    return (
      <Box className="container">
        <FormGroup>
          <Box paddingTop="30px" paddingBottom="20px" paddingLeft="20px">
            <Select sm={6} onChange={this.handleChange}>
              <MenuItem value="small">Small</MenuItem>
              <MenuItem value="large">Large</MenuItem>
              <MenuItem value="Landscape">Landscape</MenuItem>
            </Select>
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
                        <img style={{height: '20vw'}} src={product.imageUrl} />
                        <Typography style={{color: 'white'}}>
                          {product.title}
                        </Typography>
                      </Link>
                      <Button
                        type="button"
                        variant="contained"
                        style={{backgroundColor: '#2F4F4F'}}
                        onClick={() =>
                          this.props.addItemToCart(this.props.user.id, {
                            productId: product.id,
                            orderId: this.props.cart.id
                          })
                        }
                      >
                        Add To Cart
                      </Button>
                    </CardContent>
                  </Paper>
                </Grid>
              )
            })}
          </Grid>
        ) : (
          <div className="loading">Loading Products...</div>
        )}
      </Box>
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
