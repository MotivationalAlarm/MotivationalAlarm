const Sequelize = require('sequelize');

const sequelize = new Sequelize('alarm', 'epeavy', null, {
  dialect: 'postgres'
});

module.exports = sequelize
