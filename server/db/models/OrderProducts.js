const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('orderproducts', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  }
})

module.exports = OrderProducts
