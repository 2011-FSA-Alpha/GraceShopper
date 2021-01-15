import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = props => {
  return (
    <div>
      <h1>404 - Not Found</h1>
      {Object.keys(props).length ? (
        <h4 onClick={() => props.history.goBack()}>Go Back</h4>
      ) : (
        <Link to="/">
          <h4>Go Home</h4>
        </Link>
      )}
    </div>
  )
}

export default NotFound
