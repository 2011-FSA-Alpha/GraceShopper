import React from 'react'

const AdminEditProdForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="title"> Title: </label>
      <input
        name="title"
        type="text"
        onChange={props.handleChange}
        value={props.title}
      />

      <label htmlFor="description"> Description: </label>
      <input
        name="description"
        type="text"
        onChange={props.handleChange}
        value={props.description}
      />

      <label htmlFor="price"> Price: </label>
      <input
        name="price"
        type="text"
        onChange={props.handleChange}
        value={props.price}
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

export default AdminEditProdForm
