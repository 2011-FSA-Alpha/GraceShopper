'use strict'
const faker = require('faker')
const db = require('../server/db')
const {
  User,
  Order,
  Payment,
  Product,
  OrderProducts
} = require('../server/db/models')

const randomUser = []
const randomProduct = []

async function largeSeed() {
  for (let i = 0; i <= 200; i++) {
    const randomUserId = Math.floor(Math.random() * 200)
    const tags = ['small', 'medium', 'large']
    const randomTag = tags[Math.floor(Math.random() * 3)]

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
    const randomUser = Math.floor(Math.random() * 200)
    const user = await User.findByPk(randomUser)
    // Build Carts
    const [order, cartCreated] = await Order.findOrCreate({
      where: {
        userId: randomUser,
        paid: false
      }
    })

    const randomCartLength = Math.ceil(Math.random() * 10)
    let randomCart = []
    for (let j = 0; j < randomCartLength; j++) {
      randomCart.push(randomProduct[Math.floor(Math.random() * 200)])
    }

    await order.addProducts(randomCart)

    // Build Order History
    const [closedOrder, historyCreated] = await Order.findOrCreate({
      where: {
        userId: Math.random() * 200,
        paid: true
      }
    })

    const randomOrderHistoryLength = Math.ceil(Math.random() * 10)
    let randomOrderHistory = []
    for (let n = 0; n < randomOrderHistoryLength; n++) {
      randomOrderHistory.push(randomProduct[Math.floor(Math.random() * 200)])
    }

    await closedOrder.addProducts(randomOrderHistory)

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
