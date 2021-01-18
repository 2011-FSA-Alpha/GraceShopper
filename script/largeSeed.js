'use strict'
const faker = require('faker')
const db = require('../server/db')
const {User, Order, Product} = require('../server/db/models')

const randomUser = []
const randomProduct = []

// eslint-disable-next-line complexity
async function largeSeed() {
  for (let i = 0; i <= 200; i++) {
    const randomUserId = Math.ceil(Math.random() * 200)
    const tags = ['small', 'medium', 'large']
    const randomTag = tags[Math.floor(Math.random() * 2)]

    randomUser.push({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      adminStatus: faker.random.boolean()
    })

    randomProduct.push({
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.random.number(),
      imageUrl: faker.image.imageUrl(),
      totalDownloads: faker.random.number(),
      likes: faker.random.number(),
      tags: tags[randomTag],
      userId: randomUserId
    })
  }

  await Promise.all(
    randomUser.map(user => {
      return User.create(user)
    })
  )

  await Promise.all(
    randomProduct.map(product => {
      return Product.create(product)
    })
  )

  for (let i = 0; i <= 1000; i++) {
    const randomUser = Math.ceil(Math.random() * 200)
    // Build Carts
    const [order] = await Order.findOrCreate({
      where: {
        userId: randomUser,
        paid: false
      }
    })

    const randomCartLength = Math.ceil(Math.random() * 10)
    let randomCart = []
    for (let j = 0; j < randomCartLength; j++) {
      randomCart.push(Math.ceil(Math.random() * 200))
    }

    for (let t = 0; t < randomCart.length; t++) {
      if (!order.hasProduct(randomCart[t]))
        await order.addProduct(randomCart[t])
    }

    // Build Order History
    const [closedOrder] = await Order.findOrCreate({
      where: {
        userId: Math.ceil(Math.random() * 200),
        paid: true
      }
    })

    const randomOrderHistoryLength = Math.ceil(Math.random() * 10)
    let randomOrderHistory = []
    for (let n = 0; n < randomOrderHistoryLength; n++) {
      console.log(n)
      randomOrderHistory.push(Math.ceil(Math.random() * 200))
    }

    for (let y = 0; y < randomOrderHistory.length; y++) {
      if (!closedOrder.hasProduct(randomOrderHistory[y]))
        await closedOrder.addProduct(randomOrderHistory[y])
    }

    console.log(randomCart)
    console.log(randomOrderHistory)
  }
}

async function runSeed() {
  console.log('seeding...')
  try {
    await largeSeed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = largeSeed
