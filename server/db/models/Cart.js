const Sequelize = require('sequelize')
const db = require('../db')

const Cart = db.define('cart', {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  total: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Cart
