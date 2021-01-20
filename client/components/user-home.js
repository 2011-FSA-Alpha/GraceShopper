import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderHistory from './OrderHistory'
import EditUser from './EditUser'

/**
 * COMPONENT
 */
export class UserHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showEdit: false
    }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  toggleEdit() {
    this.setState(prevState => ({showEdit: !prevState.showEdit}))
  }

  render() {
    const {email, name, adminStatus} = this.props

    let user = this.props.user
    const firstName = name.split(' ')[0]
    const {showEdit} = this.state

    return (
      <div>
        <h2>Welcome to your Wallpaper account, {firstName}!</h2>
        <h3 style={{textDecoration: 'underline'}}> User Info </h3>

        <button type="button" onClick={this.toggleEdit}>
          Edit User Profile
        </button>

        {showEdit ? <EditUser user={user} /> : null}

        <h4> Name: {name}</h4>
        <h4> Email: {email}</h4>
        <h4> Admin Status: {adminStatus ? 'Yes' : 'No'}</h4>
        <h3>Past Orders:</h3>
        <OrderHistory />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    name: state.user.name,
    adminStatus: state.user.adminStatus,
    user: state.user
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
