import React from 'react'

const AdminEditProdForm = props => {
  return (
    <div>
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
          type="number"
          onChange={props.handleChange}
          value={props.price}
        />

        <label htmlFor="imageUrl"> Image Url: </label>
        <input
          name="imageUrl"
          type="text"
          onChange={props.handleChange}
          value={props.imageUrl}
        />

        <label htmlFor="tags"> Tags: </label>
        <input
          name="tags"
          type="text"
          onChange={props.handleChange}
          value={props.tags}
        />
        <div>
          <button type="submit"> Submit Changes </button>
        </div>
      </form>
    </div>
  )
}

export default AdminEditProdForm
