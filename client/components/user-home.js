import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderHistory from './OrderHistory'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, name, adminStatus} = props
  const firstName = name.split(' ')[0]
  //const lastName = name.split(' ')[1]
  return (
    <div>
      <h2>Welcome to your Wallpaper account, {firstName}!</h2>
      <h3 style={{textDecoration: 'underline'}}> User Info </h3>
      <h4> Name: {name}</h4>
      <h4> Email: {email}</h4>
      <h4> Admin Status: {adminStatus ? 'Yes' : 'No'}</h4>
      <h3>Past Orders:</h3>
      <OrderHistory />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    name: state.user.name,
    adminStatus: state.user.adminStatus
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
