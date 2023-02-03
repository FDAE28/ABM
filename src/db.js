const Sequelize = require('sequelize')
const Usuario = require('./models/Users')




const dataBase = new Sequelize('edge', 'postgres', 'admin', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
})

Usuario(dataBase)

module.exports = {dataBase, ...dataBase.models};
