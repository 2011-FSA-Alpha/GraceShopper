import React from 'react'

class SingleProduct extends React.Component {
  render() {
    const {product} = this.props
    return (
      <div>
        <h3>Product info:</h3>
        <div>Product Name: {product.name}</div>
        <div>Product Description: {product.description}</div>
        <div>Product Author: {product.author}</div>
        <div>Product Price: ${product.price}</div>
        <img src={product.image} />
        <div>Total downloads: {product.totalDownloads}</div>
        <div>Total # of Likes: {product.likes}</div>
        <div>Tags: {product.tags}</div>
      </div>
    )
  }
}
