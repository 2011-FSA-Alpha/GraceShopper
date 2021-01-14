import React from 'react'
import SignupForm from './Signup-Form'

export class Signup extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
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
        <SignupForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          email={this.state.email}
          password={this.state.password}
          verifyPass={this.state.verifyPass}
        />
      </div>
    )
  }
}
