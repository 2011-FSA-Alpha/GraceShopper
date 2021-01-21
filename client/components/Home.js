import React, {Component} from 'react'
import AllProducts from './AllProducts'
import Carousel from './Carousel'
import Footer from './Footer'
import {Typography, Box} from '@material-ui/core'

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
            <img
              src="https://dl.dropboxusercontent.com/s/vi19joy6hboavgo/wallpaper_logo_web.png?dl=0"
              style={{height: '75%', width: '75%', paddingLeft: '4rem'}}
            />
            {/* <Box display="flex" justifyContent="center">
              <Typography
                variant="h4"
                style={{color: 'white', alignSelf: 'center'}}
              >
                Wallpaper
              </Typography>
            </Box> */}
            <Box>
              <Typography variant="h5" style={{color: 'white'}}>
                A marketplace for the best digital wallpapers on the internet.
              </Typography>
            </Box>
          </div>
          <Carousel />
        </div>
        <AllProducts />
      </div>
    )
  }
}

export default Home
