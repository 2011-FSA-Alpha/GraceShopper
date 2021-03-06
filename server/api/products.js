const router = require('express').Router()
const {Product} = require('../db/models')
const adminOnly = require('../util/adminOnly')
const passport = require('passport')

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

// GET /api/products/:productId
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
    console.log(req.body)
    console.log(req.user)
    const {title, description, price, imageUrl} = req.body
    let tags = req.body.tags.split(',')
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

// PUT /api/products/:productId
// NOTE: only Admins can edit products
router.put('/:productId', adminOnly, async (req, res, next) => {
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

// DELETE /api/products/:productId
// NOTE: only Admins can delete products
router.delete('/:productId', adminOnly, async (req, res, next) => {
  try {
    let toBeDeleted = await Product.findByPk(req.params.productId)
    await toBeDeleted.destroy()
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})
