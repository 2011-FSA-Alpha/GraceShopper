import React from 'react'

const EditUserForm = props => {
  return (
    <div>
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

        <div>
          <button type="submit"> Submit Changes </button>
        </div>
      </form>
    </div>
  )
}

export default EditUserForm
