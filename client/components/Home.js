import React, {Component} from 'react'
import AllProducts from './AllProducts'
import Carousel from './Carousel'

class Home extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              position: 'absolute',
              zIndex: '10',
              color: 'white',
              fontSize: '100px'
            }}
          >
            <img src="https://dl.dropboxusercontent.com/s/vi19joy6hboavgo/wallpaper_logo_web.png?dl=0" />
          </div>
          <Carousel />
        </div>
        <AllProducts />
      </div>
    )
  }
}

export default Home
