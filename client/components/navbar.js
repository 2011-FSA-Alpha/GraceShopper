import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const NavBar = ({handleClick, isLoggedIn}) => (
  <div>
    <h1>wallpaper</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <NavLink to="/" color="blue">
            Home
          </NavLink>
          <NavLink to="/products" color="blue">
            All Products
          </NavLink>
          <NavLink to="/cart" color="blue">
            Cart
          </NavLink>
          <NavLink to="/profile" color="blue">
            Profile
          </NavLink>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <NavLink to="/home" color="blue">
            Home
          </NavLink>
          <NavLink to="/products" color="blue">
            All Products
          </NavLink>
          <NavLink to="/cart" color="blue">
            Cart
          </NavLink>
          <NavLink to="/profile" color="blue">
            Profile
          </NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      )}
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
