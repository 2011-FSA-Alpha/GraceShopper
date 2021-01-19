const router = require('express').Router()
const {Product} = require('../db/models')
const adminOnly = require('../util/adminOnly')

module.exports = router

// GET /api/products
router.get('/', async (req, res, next) => {
  try {
    const users = await Product.findAll()
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:productId', async (req, res, next) => {
  try {
    const user = await Product.findByPk(req.params.productId)
    res.json(user)
  } catch (error) {
    next(error)
  }
})

router.post('/', adminOnly, async (req, res, next) => {
  try {
    const {title, description, price, imageUrl, tags} = req.body
    const newProduct = await Product.create({
      title,
      description,
      price,
      imageUrl,
      tags
    })
    res.status(201).json(newProduct)
  } catch (error) {
    next(error)
  }
})

router.put('/:productId', async (req, res, next) => {
  try {
    const updateProd = await Product.findByPk(req.params.productId)
    const {title, description, price, imageUrl} = req.body
    let tags = req.body.tags.split(',')

    const updatedProduct = await updateProd.update({
      title,
      description,
      price,
      imageUrl,
      tags: tags
    })

    res.json(updatedProduct)
  } catch (error) {
    next(error)
  }
})

router.delete('/:productId', async (req, res, next) => {
  try {
    res.send(await Product.destroy({where: {id: req.params.productId}}))
  } catch (error) {
    next(error)
  }
})
