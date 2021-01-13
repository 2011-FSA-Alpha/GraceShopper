const User = require('./user')
const Product = require('./Product')
const Order = require('./Order')
const Cart = require('./Cart')
const Payment = require('./Payment')
const CartProduct = require('./CartProduct')

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.belongsToMany(Product, {through: 'UserProducts'})
Product.belongsToMany(User, {through: 'UserProducts'})

User.hasOne(Cart)
Cart.belongsTo(User)
Cart.belongsToMany(Product, {through: CartProduct})
Product.belongsToMany(Cart, {through: CartProduct})

User.hasMany(Payment)
Payment.belongsTo(User)

Order.belongsToMany(Product, {through: 'OrderHistory'})
Product.belongsToMany(Order, {through: 'OrderHistory'})
User.hasMany(Order)
Order.belongsTo(User)

module.exports = {
  User,
  Product,
  Order,
  Cart,
  Payment,
  CartProduct
}
