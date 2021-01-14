import React from 'react'
import {connect} from 'react-redux'
import {addProductThunk} from '../store/singleProduct'

class AddProductForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      price: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(evt) {
    evt.preventDefault()
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    const {title, description, price} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Product Title</label>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={title}
        />
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        />
        <label htmlFor="price">Product Price</label>
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  addProductThunk: (id, product) => dispatch(addProductThunk(id, product))
})
export default connect(null, mapDispatch)(AddProductForm)
