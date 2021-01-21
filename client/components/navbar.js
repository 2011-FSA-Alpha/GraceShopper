import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {logout} from '../store'
import {AppBar, Button, Typography, Toolbar, Box} from '@material-ui/core'

const NavBar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav>
      <AppBar
        position="fixed"
        display="flex"
        margin="10px"
        style={{backgroundColor: '#333333'}}
      >
        <Toolbar display="flex">
          <Box>
            <Typography variant="h4">
              <img
                src="https://dl.dropboxusercontent.com/s/vi19joy6hboavgo/wallpaper_logo_web.png?dl=0"
                style={{width: '30px', height: '25px'}}
              />
              allpaper
            </Typography>
          </Box>
          <Box>
            {isLoggedIn ? (
              <div>
                {/* The navbar will show these links after you log in */}
                <Button href="/" color="inherit">
                  Home
                </Button>
                <Button href="/products" color="inherit">
                  Browse Images
                </Button>
                <Button href="/cart" color="inherit">
                  Cart
                </Button>
                <Button href="/profile" color="inherit">
                  Profile
                </Button>
                <Button href="#" onClick={handleClick} color="inherit">
                  Logout
                </Button>
              </div>
            ) : (
              <div>
                {/* The navbar will show these links before you log in */}
                <Button href="/" color="inherit">
                  Home
                </Button>
                <Button href="/products" color="inherit">
                  Browse Images
                </Button>
                <Button href="/cart" color="inherit">
                  Cart
                </Button>
                <Button href="/profile" color="inherit">
                  Profile
                </Button>
                <Button href="/login" color="inherit">
                  Login
                </Button>
                <Button href="/signup" color="inherit">
                  Sign Up
                </Button>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(NavBar)

/**
 * PROP TYPES
 */
NavBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
