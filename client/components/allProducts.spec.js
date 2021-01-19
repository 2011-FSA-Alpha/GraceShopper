import React from 'react'
import {expect} from 'chai'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {AllProducts} from './AllProducts'
import FilterBar from './FilterBar'

configure({adapter: new Adapter(), disableLifecycleMethods: true})

describe('AllProducts component', () => {
  let wrapper

  beforeEach(() => {
    let products = [
      {id: 1, title: 'Sunset', imageUrl: 'some text'},
      {id: 2, title: 'Skyline', imageUrl: 'some text'}
    ]

    let currentlyDisplayed = [
      {id: 1, title: 'Sunset', imageUrl: 'some text'},
      {id: 2, title: 'Skyline', imageUrl: 'some text'}
    ]

    wrapper = shallow(
      <AllProducts
        products={products}
        currentlyDisplayed={currentlyDisplayed}
      />
    )
  })

  it('renders a container div', () => {
    expect(wrapper.find('div.container')).to.have.length(1)
  })

  it('renders FilterBar component', () => {
    expect(wrapper.find(FilterBar)).to.be.lengthOf(1)
  })
})
