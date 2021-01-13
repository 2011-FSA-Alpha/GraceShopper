'use strict'
const faker = require('faker')
const db = require('../server/db')
const {
  User,
  Cart,
  CartProduct,
  Order,
  Payment,
  Product
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Ned',
      email: 'ned@email.com',
      password: '123',
      adminStatus: true
    }),
    User.create({
      name: 'Morgan',
      email: 'morgan@email.com',
      password: '123',
      adminStatus: false
    }),
    User.create({
      name: 'Azriel',
      email: 'azriel@email.com',
      password: '123',
      adminStatus: false
    }),
    User.create({
      name: 'Ricky',
      email: 'ricky@email.com',
      password: '123',
      adminStatus: false
    })
  ])

  const product = await Promise.all([
    Product.create({
      title: 'Boise Foothills',
      description: 'A nice picture of Idaho',
      price: '123.00',
      imageUrl:
        'https://dl.dropboxusercontent.com/s/rslj1dticwykez0/201024_PRS_Idaho_003.jpg?dl=0',
      totalDownloads: 60,
      likes: 200,
      tags: ['landscape', 'small']
    }),
    Product.create({
      title: 'Snake River',
      description: 'A nice picture of Idaho',
      price: '213.24',
      imageUrl:
        'https://dl.dropboxusercontent.com/s/r44d4wlfaruvy4t/201025_PRS_Idaho_013.jpg?dl=0',
      totalDownloads: 2,
      likes: 100,
      tags: ['landscape', 'large']
    }),
    Product.create({
      title: 'Unlawful',
      description: 'A nice picture of Idaho',
      price: '99.99',
      imageUrl:
        'https://dl.dropboxusercontent.com/s/ygws73v6ftwzc7o/201026_PRS_Idaho_018.jpg?dl=0',
      totalDownloads: 25,
      likes: 1,
      tags: ['landscape', 'large']
    }),
    Product.create({
      title: 'Rockslide',
      description: 'A nice picture of Idaho',
      price: '1.00',
      imageUrl:
        'https://dl.dropboxusercontent.com/s/92j6svuhk89pcnu/201026_PRS_Idaho_026.jpg?dl=0',
      totalDownloads: 1000,
      likes: 9,
      tags: ['landscape', 'small']
    }),
    Product.create({
      title: 'Above The Snake River',
      description: 'A nice picture of Idaho',
      price: '1.50',
      imageUrl:
        'https://dl.dropboxusercontent.com/s/utcqezql0o8zm6d/201026_PRS_Idaho_028.jpg?dl=0',
      totalDownloads: 256,
      likes: 5,
      tags: ['landscape', 'small']
    })
  ])

  const carts = await Promise.all([
    Cart.create({
      quantity: 5,
      total: 52.0,
      userId: 1
    }),
    Cart.create({
      quantity: 1,
      total: 100.25,
      userId: 2
    }),
    Cart.create({
      quantity: 10,
      total: 925.5,
      userId: 3
    })
  ])

  const ned = await User.findByPk(1)
  const morgan = await User.findByPk(2)
  const azriel = await User.findByPk(3)
  const ricky = await User.findByPk(4)

  const imgOne = await Product.findByPk(1)
  const imgTwo = await Product.findByPk(2)
  const imgThree = await Product.findByPk(3)
  const imgFour = await Product.findByPk(4)
  const imgFive = await Product.findByPk(5)

  await ned.addProduct(imgOne)
  await morgan.addProduct(imgTwo)
  await azriel.addProduct(imgThree)
  await ricky.addProducts([imgFour, imgFive])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
