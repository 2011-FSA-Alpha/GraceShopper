import React, {Component} from 'react'

class FilterBar extends Component {
  render() {
    let tags = []
    this.props.products.map(product =>
      product.tags.forEach(tag => {
        if (!tags.includes(tag)) tags.push(tag)
      })
    )

    return (
      <div>
        <span>Filter by:</span>
        <select onChange={this.props.handleChange}>
          {tags.map(tag => {
            return (
              <option value={`${tag}`} key={tag}>
                {tag}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default FilterBar
