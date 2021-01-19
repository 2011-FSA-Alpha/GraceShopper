const {expect} = require('chai')
const db = require('../index')
const Order = require('./Order')
const Product = require('./Product')
const OrderProducts = require('./OrderProducts')

describe('OrderProducts model', async () => {
  beforeEach(async () => {
    return db.sync({force: true})
  })

  it('keep track of an orders products', async () => {
    let newCart = await Order.create({
      paid: false
    })

    let item = await Product.create({
      title: 'test',
      description: 'testing',
      price: 100,
      imageUrl: 'www.dogs.com/pics',
      totalDownloads: 60,
      likes: 200,
      tags: ['landscape', 'small']
    })

    await newCart.addProduct(item)

    let orderProduct = await OrderProducts.findAndCountAll()
    console.log(orderProduct)

    expect(orderProduct.count).to.equal(1)
  })
})
