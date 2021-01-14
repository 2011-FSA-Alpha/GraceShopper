import React from 'react'
import AdminEditProdForm from './AdminEditProdForm'

export class AdminEditProd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      price: '',
      verifyPass: ''
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
      //call addUser in store/user.js. Need to make POST API route in api/users.js
      //reset field values?
      /* this.setState({
                name: '',
                email: '',
                password: '',
                verifyPass: ''
            }) */
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div>
        Sign Up
        <AdminEditProdForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={this.state.title}
          description={this.state.description}
          price={this.state.price}
          verifyPass={this.state.verifyPass}
        />
      </div>
    )
  }
}
