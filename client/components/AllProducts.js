import React from 'react'
import {connect} from 'react-redux'
import {getProducts} from '../store/allProducts'

export class AllProducts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return <React.Fragment />
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(mapState, mapDispatch)(AllProducts)
