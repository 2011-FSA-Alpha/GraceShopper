import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderHistory from './OrderHistory'
import {Card, CardContent, Typography, Box, Paper} from '@material-ui/core'
import EditUser from './EditUser'


/**
 * COMPONENT
 */

export const UserHome = props => {
  const {email, name, adminStatus} = props
  const firstName = name.split(' ')[0]
  //const lastName = name.split(' ')[1]
  return (
    <React.Fragment>
      <Box position="relative" paddingTop="40px" paddingLeft="40px">
        <Typography variant="h4" style={{color: 'lightgray'}}>
          Welcome to your Wallpaper account, {firstName}!
        </Typography>
      </Box>
      <Box
        position="relative"
        paddingLeft="40px"
        paddingTop="40px"
        width="60vw"
        alignSelf="center"
      >
        <Paper style={{backgroundColor: '#333333'}}>
          <CardContent>
            <Typography variant="h5" style={{color: 'lightgray'}}>
              {' '}
              User Info{' '}
            </Typography>
            <Typography variant="h5" style={{color: 'lightgray'}}>
              {' '}
              Name: {name}
            </Typography>
            <Typography variant="h5" style={{color: 'lightgray'}}>
              {' '}
              Email: {email}
            </Typography>
            {adminStatus ? (
              <Typography variant="h5" style={{color: 'lightgray'}}>
                {' '}
                Admin Status: You are a Wallpaper administrator
              </Typography>
            ) : null}
          </CardContent>
        </Paper>
      </Box>
      <Box position="relative" paddingTop="40px" paddingLeft="40px">
        <Typography variant="h5" style={{color: 'lightgray'}}>
          Order History:
        </Typography>
      </Box>{' '}
      <OrderHistory />
    </React.Fragment>
  )

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
