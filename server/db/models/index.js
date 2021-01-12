const User = require('./User')
const Product = require('./Product')
const Order = require('./Order')
const Cart = require('./Cart')
const Payment = require('./Payment')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.hasMany(Product, {through: 'UserProducts'})
Product.belongsTo(User, {through: 'UserProducts'})

User.hasOne(Cart)
Cart.belongsTo(User)
Cart.hasMany(Product, {through: 'CartProduct'})
Product.belongsToMany(Cart, {through: 'CartProduct'})

User.hasMany(Payment)
Payment.belongsTo(User)

Product.hasMany(Order)
Order.hasMany(Product)
User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
  User,
  Product,
  Order,
  Cart
}
