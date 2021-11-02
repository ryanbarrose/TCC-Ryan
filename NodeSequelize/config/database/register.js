const Sequelize = require('sequelize')  
const conn = require('./dabatabase')


const armasSchema = {
    id_armas: {
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
        unique:true,
        unsigned:true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      valor: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      municao_total: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      municao_pente: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      sistema_funcionamento_pri: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      sistema_funcionamento_sec: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      rate: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.DECIMAL(10,2),
      },
      tiros_rajada: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      penetracao: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmax_cab: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmed_cab: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmin_cab: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmax_cop: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmed_cop: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmin_cop: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmax_per: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmed_per: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmin_per: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      distmax_dmax: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      distmax_dmed: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      distmax_dmin: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
    };

const armasTable = conn.define('users',armasSchema)

armasTable.sync({force: false}).then(() =>{
    console.log("Criei a tabela");
}).catch((erro) =>{
    console.log(erro);
})

module.exports = armasTable