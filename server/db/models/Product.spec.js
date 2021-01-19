const {expect} = require('chai')
const db = require('../index')
const Product = require('./Product')

describe('Product model', async () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  it('creates an instance with the values passed in', async () => {
    let item = await Product.create({
      title: 'test',
      description: 'testing',
      price: 100,
      imageUrl: 'www.dogs.com/pics',
      totalDownloads: 60,
      likes: 200,
      tags: ['landscape', 'small']
    })

    expect(item.title).to.equal('test')
    expect(item.description).to.equal('testing')
    expect(item.price).to.equal(100)
    expect(item.imageUrl).to.equal('www.dogs.com/pics')
    expect(item.totalDownloads).to.equal(60)
    expect(item.likes).to.equal(200)
    expect(item.tags).to.include('landscape', 'small')
  })
})
