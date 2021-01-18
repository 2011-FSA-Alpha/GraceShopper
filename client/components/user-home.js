import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderHistory from './OrderHistory'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, name} = props
  const firstName = name.split(' ')[0]
  return (
    <div>
      <h3>Welcome to your Wallpaper account, {firstName}!</h3>
      <h4>Past Orders:</h4>
      {/* <OrderHistory /> */}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    name: state.user.name
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
