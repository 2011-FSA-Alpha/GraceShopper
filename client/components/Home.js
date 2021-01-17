import React, {Component} from 'react'
import AllProducts from './AllProducts'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          {/* Header Will Go Here */}
          <div
            style={{
              height: '48vh',
              width: '100vw',
              backgroundColor: '#eee',
              marginBottom: '2rem',
              marginTop: '2rem'
            }}
          />
        </div>

        <AllProducts />
      </div>
    )
  }
}

export default Home
