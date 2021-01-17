import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import OrderConfirmed from './OrderConfirmed'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('OrderConfirmed', () => {
  let orderConfirmed
  let cartId = 9
  let total = 100

  beforeEach(() => {
    orderConfirmed = shallow(<OrderConfirmed />)
  })

  it('renders a confirmed message', () => {
    expect(orderConfirmed.find('h1')).to.have.length(1)
  })

  it('renders a summary', () => {
    expect(orderConfirmed.find('h3').length).to.equal(2)
  })
})
