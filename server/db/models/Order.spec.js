const {expect} = require('chai')
const db = require('../index')
const Order = require('./Order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  let newCart
  let pastOrder

  it('can store a shopping cart', async () => {
    newCart = await Order.create({
      paid: false
    })
    expect(newCart.paid).to.be.equal(false)
  })
  it('can store order history', async () => {
    pastOrder = await Order.create({
      paid: true
    })
    expect(pastOrder.paid).to.be.equal(true)
  })
})
