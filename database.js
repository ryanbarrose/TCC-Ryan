const Sequelize = require('sequelize')  

const conn = new Sequelize('tcc','root','ryan2608',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = conn