import React from 'react'
import {expect} from 'chai'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {SingleProduct} from './SingleProduct'

configure({adapter: new Adapter(), disableLifecycleMethods: true})

describe('SingleProduct component', () => {
  let product = {
    title: 'Windows',
    description: 'A computer wallpaper',
    price: 40,
    imageUrl: 'image',
    totalDownloads: 18,
    likes: 94,
    tags: ['hot', 'awesome']
  }

  it('renders a div', () => {
    const wrapper = shallow(<SingleProduct product={product} />)
    expect(wrapper.find('div')).to.have.length(7)
  })
  it('renders an h3 tag', () => {
    const wrapper = shallow(<SingleProduct product={product} />)
    expect(wrapper.find('h3').text()).to.be.equal('Product Info:')
  })
  it('renders a product title, description, price, total downloads, likes, and tags', () => {
    const wrapper = shallow(<SingleProduct product={product} />)
    expect(wrapper.text()).to.include('Product Title: Windows')
    expect(wrapper.text()).to.include(
      'Product Description: A computer wallpaper'
    )
    expect(wrapper.text()).to.include('Product Price:', 40)
    expect(wrapper.text()).to.include('Total downloads:', 18)
    expect(wrapper.text()).to.include('Total # of Likes:', 94)
    expect(wrapper.text()).to.include('Tags: hotawesome')
  })

  it('renders an image', () => {
    const wrapper = shallow(<SingleProduct product={product} />)
    expect(wrapper.find('img')).to.have.length(1)
  })
})
