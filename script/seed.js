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
      title: 'Ned',
      email: 'ned@email.com',
      password: '123',
      adminStatus: true
    }),
    Product.create({
      title: 'Morgan',
      email: 'morgan@email.com',
      password: '123',
      adminStatus: false
    }),
    Product.create({
      title: 'Azriel',
      email: 'azriel@email.com',
      password: '123',
      adminStatus: false
    }),
    Product.create({
      title: 'Ricky',
      email: 'ricky@email.com',
      password: '123',
      adminStatus: false
    })
  ])

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
