import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'

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
})
