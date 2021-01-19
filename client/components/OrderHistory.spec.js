import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {OrderHistory} from './OrderHistory'

const adapter = new Adapter()
enzyme.configure({adapter, disableLifecycleMethods: true})

describe('OrderHistory', () => {
  it('dynamically renders all of a users past orders', () => {
    const props = {
      orderHistory: [
        {
          id: 1,
          products: [
            {
              id: 1,
              title: 'Dog Pic',
              description: 'Picture of dog',
              price: 100,
              imageUrl: 'https://picsum.photos/200/300'
            },
            {
              id: 2,
              title: 'Dog Pic',
              description: 'Picture of dog',
              price: 100,
              imageUrl: 'https://picsum.photos/200/300'
            },
            {
              id: 3,
              title: 'Dog Pic',
              description: 'Picture of dog',
              price: 100,
              imageUrl: 'https://picsum.photos/200/300'
            }
          ]
        },
        {
          id: 2,
          products: [
            {
              id: 1,
              title: 'Dog Pic',
              description: 'Picture of dog',
              price: 100,
              imageUrl: 'https://picsum.photos/200/300'
            },
            {
              id: 2,
              title: 'Dog Pic',
              description: 'Picture of dog',
              price: 100,
              imageUrl: 'https://picsum.photos/200/300'
            },
            {
              id: 3,
              title: 'Dog Pic',
              description: 'Picture of dog',
              price: 100,
              imageUrl: 'https://picsum.photos/200/300'
            }
          ]
        }
      ],
      fetchOrderHistory: () => console.log('helloWorld')
    }

    let wrapper = shallow(<OrderHistory {...props} />)
    expect(wrapper.find('div.order-history')).to.have.lengthOf(2)
  })
})
