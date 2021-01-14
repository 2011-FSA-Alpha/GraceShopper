import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import {Cart} from './Cart'

describe('Cart component', () => {
  let wrapper

  beforeEach(() => {
    let cart = [
      {id: 1, name: 'Mountains', price: 599, quantity: 2},
      {id: 2, name: 'Town', price: 199, quantity: 1}
    ]

    wrapper = shallow(<Cart cart={cart} />)
  })

  it('renders the cart page', () => {
    expect(wrapper).to.have.decendants('#root')
  })
})
