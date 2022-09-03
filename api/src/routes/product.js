const { Router } = require("express")
const {product} = require('../models/product.js')
const router = Router();

// http://localhost:3001/products
async function getProducts(req, res){
    product.findAll({
    attributes:['id','name','url_image','price','discount','category']
    })
    .then(response=>res.send(response))
    .catch(error=>res.send(`Error para mostrar product: ${error}`))
}

router.get("/", getProducts)

module.exports = router;