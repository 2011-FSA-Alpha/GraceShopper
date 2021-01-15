import React from 'react'
import {connect} from 'react-redux'
import {addProductThunk} from '../store/singleProduct'

class AddProductForm extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      description: '',
      price: '',
      imageUrl: '',
      tags: ''
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
    const {title, description, price, imageUrl, tags} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Product Title:</label>
        <input
          type="text"
          name="title"
          onChange={this.handleChange}
          value={title}
        />
        <label htmlFor="description">Product Description:</label>
        <input
          type="text"
          name="description"
          onChange={this.handleChange}
          value={description}
        />
        <label htmlFor="price">Product Price:</label>
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={price}
        />
        <label htmlFor="imageUrl">Product Image Url:</label>
        <input
          type="text"
          name="imageUrl"
          onChange={this.handleChange}
          value={imageUrl}
        />
        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          name="tags"
          onChange={this.handleChange}
          value={tags}
        />
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  addProductThunk: (id, product) => dispatch(addProductThunk(id, product))
})
export default connect(null, mapDispatch)(AddProductForm)
