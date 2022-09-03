const { Router } = require("express")
const {category} = require('../models/category.js')
const router = Router();

// http://localhost:3001/categories
async function getCategories(req, res){
    category.findAll({
        attributes:['id','name']
    })
        .then(response=>res.send(response))
        .catch(error=>res.send(`Error de tabla categorias: ${error}`))
}

router.get("/", getCategories)

module.exports = router;