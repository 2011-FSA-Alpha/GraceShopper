import React, {Component} from 'react'

class FilterBar extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    // Loop through this to find all tags
    console.log('AllProducts props', this.props.products)
    let tags = []
    console.log(
      this.props.products.map(product =>
        product.tags.forEach(tag => {
          if (!tags.includes(tag)) tags.push(tag)
        })
      )
    )
    console.log(tags)
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
