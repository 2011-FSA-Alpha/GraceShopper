import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import OrderConfirmed from './OrderConfirmed'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('OrderConfirmed', () => {
  let orderConfirmed

  beforeEach(() => {
    orderConfirmed = shallow(<OrderConfirmed orderId="952" total="100.00" />)
  })

  it('renders a confirmed message', () => {
    expect(orderConfirmed.find('h1')).to.have.length(1)
  })

  it('renders a summary', () => {
    expect(orderConfirmed.find('h3').length).to.equal(2)
  })

  it('renders an order number', () => {
    expect(orderConfirmed.find('h3.order-id').text()).to.equal(
      'Your order number is: #952'
    )
  })

  it('renders an order total', () => {
    expect(orderConfirmed.find('h3.order-total').text()).to.contain(
      'Your total is: 100.00'
    )
  })
})
