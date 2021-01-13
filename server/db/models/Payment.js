const Sequelize = require('sequelize')
const db = require('../db')

const Payment = db.define('payment', {
  method: {
    type: Sequelize.STRING
  },
  number: {
    type: Sequelize.INTEGER
  }
})

module.exports = Payment
