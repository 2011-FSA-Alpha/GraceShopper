import React from 'react'
import AdminEditProdForm from './AdminEditProdForm'

export class AdminEditProd extends React.Component {
  constructor(props) {
    super(props)
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    try {
      //update the product with new values. call method from store. check API
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div>
        <h1> Edit Product: </h1>
        <AdminEditProdForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          description={this.state.description}
          price={this.state.price}
          imageUrl={this.state.imageUrl}
          tags={this.state.tags}
        />
      </div>
    )
  }
}
