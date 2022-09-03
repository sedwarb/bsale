const Sequelize = require('sequelize')
require('dotenv').config();

const {BSALE, HOST, DIALECT} = process.env;

const sequelize = new Sequelize(BSALE,BSALE,BSALE,{host:HOST,dialect:DIALECT})

module.exports = {sequelize}