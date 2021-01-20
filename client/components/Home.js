import React, {Component} from 'react'
import AllProducts from './AllProducts'
import Carousel from './Carousel'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Carousel />
        </div>
        <AllProducts />
      </div>
    )
  }
}

export default Home
