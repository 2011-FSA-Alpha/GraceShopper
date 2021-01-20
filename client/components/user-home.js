import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import OrderHistory from './OrderHistory'
import {
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Button
} from '@material-ui/core'
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
        <Box>
          <Button type="button" onClick={this.toggleEdit}>
            Edit User Profile
          </Button>
          {showEdit ? <EditUser user={user} /> : null}
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
}

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
