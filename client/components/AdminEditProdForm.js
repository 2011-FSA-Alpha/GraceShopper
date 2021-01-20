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
        {props.title.length === 0 ? <span>Field is required</span> : null}

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
        {props.price.length === 0 ? <span>Field is required</span> : null}

        <label htmlFor="imageUrl"> Image Url: </label>
        <input
          name="imageUrl"
          type="text"
          onChange={props.handleChange}
          value={props.imageUrl}
        />
        {props.imageUrl.length === 0 ? <span>Field is required</span> : null}

        <label htmlFor="tags"> Tags: </label>
        <input
          name="tags"
          type="text"
          onChange={props.handleChange}
          value={props.tags}
        />
        <div>
          {props.title.length === 0 ||
          props.price.length === 0 ||
          props.imageUrl.length === 0 ? (
            <button type="submit" disabled={true}>
              {' '}
              Submit Changes{' '}
            </button>
          ) : (
            <button type="submit" disabled={false}>
              {' '}
              Submit Changes{' '}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}

export default AdminEditProdForm
