import React from 'react'
import EditUserForm from './EditUserForm'
import {connect} from 'react-redux'
import {editUserProfile} from '../store/user'

export class EditUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    try {
      //update user. API
      const user = {...this.props.user, ...this.state}
      console.log(user)
      this.props.editUserProfile(user)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div>
        <h1> Edit User Profile</h1>
        <EditUserForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          email={this.state.email}
        />
      </div>
    )
  }
}

const mapToDispatch = dispatch => {
  return {
    editUserProfile: user => dispatch(editUserProfile(user))
  }
}

export default connect(null, mapToDispatch)(EditUser)
