const express = require('express')
const routes = require('./routes/routes.js')
const bodyParser = require('body-parser')
const morgan = require('morgan')
require('dotenv').config()

const {DOMAIN} = process.env

const app = express()

app.name = 'API'
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }))
app.use(morgan('dev'))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', DOMAIN)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next();
});

app.use('/', routes)

app.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || err
    console.error(err)
    res.status(status).send(message)
  });

module.exports = {app}

/*
const Sequelize = require('sequelize')

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
},{freezeTableName: true})*/

/*
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
    .catch(error=>console.log(`Error de tabla categorias: ${error}`))*/

//app.listen(3000,()=>console.log("Server Activo"))

/*nuevo codigo*/
