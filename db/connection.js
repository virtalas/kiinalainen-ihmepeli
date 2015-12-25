var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://:@localhost/lassvirt', {
  dialect: 'postgres',
  protocol: 'postgres'
});

module.exports = {
  DataTypes: Sequelize,
  sequelize: sequelize
};
