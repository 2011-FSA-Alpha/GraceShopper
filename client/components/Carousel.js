import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

export default class Carousel extends React.Component {
  render() {
    const settings = {
      useTransform: true,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 2000,
      cssEase: 'ease-out'
    }

    return (
      <div
        className="container"
        style={{
          display: 'block',
          width: '100vw',
          maxHeight: '60vh',
          overflow: 'hidden'
        }}
      >
        <Slider {...settings}>
          <div>
            <img src="https://dl.dropboxusercontent.com/s/ljunlmb1o0uvzbn/RickyRhodes_TVC_Midtown_135.jpg?dl=0" />
          </div>
          <div>
            <img src="https://dl.dropboxusercontent.com/s/utcqezql0o8zm6d/201026_PRS_Idaho_028.jpg?dl=0" />
          </div>
          <div>
            <img src="https://dl.dropboxusercontent.com/s/d5tmoo75ibk3bn6/RickyRhodes_TVC_Midtown_180-Edit.jpg?dl=0" />
          </div>
          <div>
            <img src="https://dl.dropboxusercontent.com/s/kykpsi3w8ziedrs/201026_PRS_Idaho_063.jpg?dl=0" />
          </div>
        </Slider>
      </div>
    )
  }
}
