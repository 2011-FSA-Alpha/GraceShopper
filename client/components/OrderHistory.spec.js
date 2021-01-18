import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {OrderHistory} from './OrderHistory'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('OrderHistory', () => {
  beforeEach(() => {
    let history
    let wrapper
    let user

    user = [
      {
        adminStatus: false,
        createdAt: '2021-01-18T02:48:00.671Z',
        email: 'ricky.a.rhodes@gmail.com',
        googleId: '101700391713633740360',
        id: 6,
        name: 'Ricky Rhodes'
      }
    ]

    history = [
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
    ]
    wrapper = shallow(<OrderHistory orderHistory={history} user={user} />)
  })

  it('dynamically renders all of a users past orders', () => {
    console.log(history.orderHistory)
  })
})
