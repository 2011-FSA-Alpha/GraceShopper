const {expect} = require('chai')
const db = require('../db')
const Product = db.model('product')
const supertest = require('supertest')
const sinon = require('sinon')
const app = require('../index')

describe('SingleProduct route', () => {
  const product = {
    title: 'Windows',
    description: 'A computer wallpaper',
    price: 40,
    imageUrl: 'image',
    totalDownloads: 18,
    likes: 94,
    tags: ['hot', 'awesome']
  }
  describe('/api/products/:productId', () => {
    const {findAll: productFindAll} = Product
    beforeEach(() => {
      // return db.sync({force: true})
      Product.findAll = sinon.spy(() => Promise.resolve(product))
    })

    afterEach(() => {
      Product.findAll = productFindAll
    })

    it('GET /api/products/:productId', async () => {
      const response = await supertest(app).get(`/api/products/${product.id}`)
      expect(response.body).to.deep.equal(product)
    })
  })
})
