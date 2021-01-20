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

  async handleSubmit(evt) {
    evt.preventDefault()
    await this.props.addProductThunk(this.state)
    this.forceUpdate()
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
    console.log(this.state)
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
        <button type="submit">Add Product</button>
      </form>
    )
  }
}

const mapDispatch = dispatch => ({
  addProductThunk: product => dispatch(addProductThunk(product))
})
export default connect(null, mapDispatch)(AddProductForm)
