import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default class Carousel extends React.Component {
  render() {
    const settings = {
      useTransform: true,
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 200,
      autoplaySpeed: 2000,
      cssEase: 'ease-out'
    }

    return (
      <div
        className="container"
        style={{
          display: 'block',
          width: '100%',
          maxHeight: '60vh',
          overflow: 'hidden'
        }}
      >
        <Slider {...settings}>
          <div>
            <img
              src="https://dl.dropboxusercontent.com/s/pv51nbbwa8j3dct/201029_PRS_Idaho_197.jpg?dl=0
"
            />
          </div>
          <div>
            <img src="https://dl.dropboxusercontent.com/s/x4p3x6o07aur78j/RickyRhodes_TVC_Midtown_135.jpg?dl=0" />
          </div>
          <div>
            <img src="https://dl.dropboxusercontent.com/s/n8xby9m7h4lkrp4/201029_PRS_Idaho_236.jpg?dl=0" />
          </div>
          <div>
            <img src="https://dl.dropboxusercontent.com/s/jmnx0e0d48h3i0n/RickyRhodes_TVC_Midtown_180-Edit.jpg?dl=0" />
          </div>
        </Slider>
      </div>
    )
  }
}
