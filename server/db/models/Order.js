const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  paid: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  total: {
    type: Sequelize.INTEGER
  }
})

module.exports = Order
