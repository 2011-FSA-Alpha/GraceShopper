import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('NotFound', () => {
  let notFound
  let message

  beforeEach(() => {
    notFound = shallow(<NotFound />)
    message = '404 - Not Found'
  })

  it('renders a 404 message', () => {
    expect(notFound.find('h1').length).to.equal(1)
    expect(notFound.find('h1').text()).to.contain(message)
  })

  it('renders an h4 message', () => {
    expect(notFound.find('h4').length).to.equal(1)
  })
})
