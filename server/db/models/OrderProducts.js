const Sequelize = require('sequelize')
const db = require('../db')

const OrderProducts = db.define('orderproducts', {
  quantity: {
    type: Sequelize.INTEGER
  }
})

module.exports = OrderProducts
