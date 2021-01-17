import React, {Component} from 'react'
import NavBar from './navbar'
import AllProducts from './AllProducts'

class Home extends Component {
  constructor(props) {
    super(props)
  }

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
