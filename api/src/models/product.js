const Sequelize = require('sequelize')
const {sequelize} = require('../db')



const product = sequelize.define('product',{
    "id":{type:Sequelize.INTEGER,primaryKey:true},
    "name":Sequelize.STRING,
    "url_image":Sequelize.STRING,
    "price":Sequelize.FLOAT,
    "discount":Sequelize.INTEGER,
    "category":Sequelize.INTEGER
},{freezeTableName: true})

module.exports = {product}