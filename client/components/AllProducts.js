import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/products'
import {Link} from 'react-router-dom'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <React.Fragment>
        {this.props.products[0] ? (
          this.props.products.map(product => {
            return (
              <div key={product.title}>
                <Link to={`/products/${product.id}`}>
                  <img src={product.imageUrl} />
                  <h2>{product.title}</h2>
                </Link>
              </div>
            )
          })
        ) : (
          <div>Loading Products...</div>
        )}
      </React.Fragment>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
