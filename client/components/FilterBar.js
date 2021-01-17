import React, {Component} from 'react'

class FilterBar extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    // Lopp through this to find all tags
    console.log('AllProducts props', this.props.products)
    let tags = []
    console.log(
      this.props.products.map(product =>
        product.tags.forEach(tag => tags.push(tag))
      )
    )
    console.log(tags)
    return <div>Hello</div>
  }
}

export default FilterBar
