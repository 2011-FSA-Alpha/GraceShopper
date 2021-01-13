const Sequelize = require('sequelize')
const db = require('../db')

const CartProducts = db.define(
  'cartproducts',
  {
    quantity: {
      type: Sequelize.INTEGER
    }
  },
  {timestamps: false}
)

module.exports = CartProducts
