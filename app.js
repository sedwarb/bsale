const express = require('express')
const Sequelize = require('sequelize')
const app = express()

const sequelize = new Sequelize('bsale_test','bsale_test','bsale_test',{
    host:'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    dialect:'mysql'
})

const product = sequelize.define('product',{
    "id":{type:Sequelize.INTEGER,primaryKey:true},
    "name":Sequelize.STRING,
    "url_image":Sequelize.STRING,
    "price":Sequelize.FLOAT,
    "discount":Sequelize.INTEGER,
    "category":Sequelize.INTEGER
},{freezeTableName: true})

const category = sequelize.define('category',{
    "id":{type:Sequelize.INTEGER,primaryKey:true},
    "name":Sequelize.STRING
},{freezeTableName: true})

sequelize.authenticate()
    .then(()=>console.log("conexion a bd OK"))
    .catch(error=>console.log(`Error en conexion: ${error}`))

product.findAll({
    attributes:['id','name','url_image','price','discount','category'],
    where:{'id':104}
})
    .then(response=>console.log(response))
    .catch(error=>console.log(`Error para mostrar product: ${error}`))

category.findAll({
    attributes:['id','name'],
    where:{'id':6}
})
    .then(response=>console.log(response))
    .catch(error=>console.log(`Error de tabla categorias: ${error}`))

app.listen(3000,()=>console.log("Server Activo"))