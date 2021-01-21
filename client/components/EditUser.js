import React from 'react'
import EditUserForm from './EditUserForm'
import {connect} from 'react-redux'
import {editUserProfile} from '../store/user'
import {Box, Button} from '@material-ui/core'

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

  async handleSubmit(event) {
    event.preventDefault()
    try {
      //update user. API
      console.log('hey')
      const user = {...this.props.user, ...this.state}
      console.log(user)
      await this.props.editUserProfile(user)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <Box width="600px">
        <EditUserForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          name={this.state.name}
          email={this.state.email}
        />
      </Box>
    )
  }
}

const mapToDispatch = dispatch => {
  return {
    editUserProfile: user => dispatch(editUserProfile(user))
  }
}

export default connect(null, mapToDispatch)(EditUser)
