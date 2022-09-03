const Sequelize = require('sequelize')
const {sequelize} = require('../db')

const category = sequelize.define('category',{
    "id":{type:Sequelize.INTEGER,primaryKey:true},
    "name":Sequelize.STRING
},{freezeTableName: true})

module.exports = {category}