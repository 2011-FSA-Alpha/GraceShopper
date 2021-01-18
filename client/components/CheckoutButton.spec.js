import {expect} from 'chai'
import React, {useState} from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CheckoutButton, {setLoading} from './CheckoutButton'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('CheckoutButton', () => {
  let checkoutButton

  it('renders', () => {
    shallow(<CheckoutButton />)
  })

  it('renders a loading screen', () => {
    checkoutButton = shallow(<CheckoutButton />)
    expect(checkoutButton.find('div').text()).to.contain('Loading...')
  })
})
