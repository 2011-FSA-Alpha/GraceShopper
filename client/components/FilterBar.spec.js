import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FilterBar from './FilterBar'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('FilterBar component', () => {
  let filterBar

  beforeEach(() => {
    let products = [{tags: ['small', 'medium', 'large']}]
    filterBar = shallow(<FilterBar products={products} />)
  })

  it('renders a dropdown menu', () => {
    expect(filterBar.find('select')).to.have.lengthOf(1)
  })

  it('dynamically renders tags', () => {
    expect(filterBar.find('option')).to.have.lengthOf(3)
  })
})
