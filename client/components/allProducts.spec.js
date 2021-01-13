import React from 'react'
import {expect} from 'chai'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllProducts} from './AllProducts'

configure({adapter: new Adapter()})

describe('AllProducts component', () => {
  let wrapper

  beforeEach(() => {
    let products = [
      {id: 1, title: 'Sunset', imageUrl: 'some text'},
      {id: 2, title: 'Skyline', imageUrl: 'some text'}
    ]

    wrapper = shallow(<AllProducts products={products} />)
  })

  it('renders a div', () => {
    expect(wrapper.find('div')).to.have.length(2)
  })

  it('renders an h2 tag', () => {
    expect(wrapper.find('h2')).to.have.length(2)
  })

  it('renders a message "Loading products..." if passed an empty array', () => {
    let products = []
    let message = 'Loading Products...'

    wrapper = shallow(<AllProducts products={products} />)

    expect(wrapper.find('div')).to.contain(message)
  })
})
