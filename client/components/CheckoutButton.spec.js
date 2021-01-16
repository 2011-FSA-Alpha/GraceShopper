import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CheckoutButton from './CheckoutButton'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CheckoutButton', () => {
  let checkoutButton

  beforeEach(() => {
    checkoutButton = shallow(<CheckoutButton />)
  })

  it('renders a button', () => {
    expect(checkoutButton.find('button')).to.have.length(1)
  })
})
