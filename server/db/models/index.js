const User = require('./user')
const Product = require('./Product')
const Order = require('./Order')
const Payment = require('./Payment')
const OrderProducts = require('./OrderProducts')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.belongsToMany(Product, {through: 'UserProducts'})
Product.belongsTo(User, {through: 'UserProducts'})

User.hasMany(Order)
Order.belongsTo(User)
Order.belongsToMany(Product, {through: OrderProducts})
Product.belongsToMany(Order, {through: OrderProducts})

User.hasMany(Payment)
Payment.belongsTo(User)

module.exports = {
  Order,
  OrderProducts,
  Payment,
  Product,
  User
}
