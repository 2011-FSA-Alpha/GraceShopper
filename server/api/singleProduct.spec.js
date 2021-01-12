const {expect} = require('chai')
const db = require('../db')
const Product = db.model('product')
const supertest = require('supertest')
const app = require('../index')

describe('SingleProduct route', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('/api/products/:productId', () => {
    it('GET /api/products/:productId', async () => {})
  })
})
