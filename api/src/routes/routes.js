const { Router } = require('express');
const products = require('./product.js')
const categories = require('./category.js')

const router = Router();
router.use('/products', products)
router.use('/categories', categories)

module.exports = router