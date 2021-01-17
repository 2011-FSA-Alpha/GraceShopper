import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
import AllProducts from './AllProducts'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('Home component', () => {
  let home

  beforeEach(() => {
    home = shallow(<Home />)
  })

  it('renders 3 divs', () => {
    expect(home.find('div')).to.have.lengthOf(3)
  })

  it('renders the AllProducts component', () => {
    expect(home.find(AllProducts)).to.have.lengthOf(1)
  })
})
