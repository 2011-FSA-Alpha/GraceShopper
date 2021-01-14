import React from 'react'

const SignupForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="name"> Name: </label>
      <input
        name="name"
        type="text"
        onChange={props.handleChange}
        value={props.name}
      />

      <label htmlFor="email"> Email: </label>
      <input
        name="email"
        type="text"
        onChange={props.handleChange}
        value={props.email}
      />

      <label htmlFor="password"> Password: </label>
      <input
        name="password"
        type="text"
        onChange={props.handleChange}
        value={props.password}
      />

      <label htmlFor="verifyPass"> Verify Password: </label>
      <input
        name="verifyPass"
        type="text"
        onChange={props.handleChange}
        value={props.verifyPass}
      />
      {props.verifyPass === props.password ? (
        <span className="warning"> Password does not match! </span>
      ) : (
        <span />
      )}

      {props.name.length > 0 &&
      props.email.length > 0 &&
      props.password.length > 0 &&
      props.verifyPass === props.password ? (
        <button type="submit" disabled={false}>
          {' '}
          Submit{' '}
        </button>
      ) : (
        <button type="submit" disabled={false}>
          {' '}
          Submit{' '}
        </button>
      )}
    </form>
  )
}

export default SignupForm
