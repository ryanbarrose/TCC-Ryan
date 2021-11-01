module.exports = (sequelize, DataTypes) => {
    const Armas = sequelize.define('Armas', {

      nome: DataTypes.STRING,

      valor: DataTypes.VARCHAR(45),

      municao_total: DataTypes.STRING,

      municao_pente: DataTypes.STRING,

      sistema_funcionamento_pri: DataTypes.STRING,

      sistema_funcionamento_sec: DataTypes.STRING,

      rate: DataTypes.DECIMAL(10,2),

      tiros_rajada: DataTypes.STRING,
      
      penetracao: DataTypes.STRING,

      dmax_cab: DataTypes.STRING,

      dmed_cab: DataTypes.STRING,

      dmin_cab: DataTypes.STRING,

      dmax_cop: DataTypes.STRING,

      dmed_cop: DataTypes.STRING,

      dmin_cop: DataTypes.STRING,

      dmax_per: DataTypes.STRING,

      dmed_per: DataTypes.STRING,

      dmin_per: DataTypes.STRING,

      distmax_dmax: DataTypes.STRING,

      distmax_dmed: DataTypes.STRING,

      distmax_dmin: DataTypes.STRING,
    });
  
    return Armas;
  }