const {expect} = require('chai')
const {db, models: {Cart}} = require('../db')
const _app = require('../index')
const app = require('supertest')(_app)

beforeEach(async () => {
  await db.sync({force: true})
  await Promise.all([Cart.create({quantity: 2}), Cart.create({quantity: 3})])
})

describe('GET /api/cart/', () => {
  it('responds with all items in cart', async () => {
    const response = await app.get('/api/cart/')
    expect(response.status).to.equal(200)
  })
})

describe('POST /api/cart/', () => {
  it('responds with new item in cart', async () => {
    const response = await app.post('/api/cart/').send({quantity: 5})
    expect(response.status).to.equal(200)
  })
})

describe('DELETE /api/cart/:cartItemId', () => {
  it('responds with deleted items in cart', async () => {
    const response = await app.delete(`/api/cart/${Cart[0].id}`)
    expect(response.status).to.equal(200)
  })
})

describe('PUT /api/cart/:cartItemId', () => {
  it('responds with all items in cart', async () => {
    const response = await app
      .put(`/api/cart/${Cart[1].id}`)
      .send({quantity: 8})
    expect(response.status).to.equal(200)
  })
})
