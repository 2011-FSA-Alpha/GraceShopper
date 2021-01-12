const Sequelize = require('sequelize')
const db = require('../db')

const CartProduct = db.define(
  'cartproduct',
  {
    quantity: {
      type: Sequelize.INTEGER
    }
  },
  {timestamps: false}
)

module.exports = CartProduct
