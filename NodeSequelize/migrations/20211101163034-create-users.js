const database = require("../config/database/database")

/*module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('armas', {*/
const armas = database.define('armas',{
      id_armas: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique:true,
        unsigned:true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      valor: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      municao_total: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      municao_pente: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      sistema_funcionamento_pri: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      sistema_funcionamento_sec: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      rate: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.DECIMAL(10,2),
      },
      tiros_rajada: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      penetracao: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmax_cab: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmed_cab: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmin_cab: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmax_cop: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmed_cop: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmin_cop: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmax_per: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmed_per: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      dmin_per: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      distmax_dmax: {
        allowNull: false,
        unsigned:true,
        type: DataTypes.STRING,
      },
      distmax_dmed: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
      distmax_dmin: {
        allowNull: true,
        unsigned:true,
        type: DataTypes.STRING,
      },
    });

  down: (queryInterface) => {
    return queryInterface.dropTable('armas');
  }