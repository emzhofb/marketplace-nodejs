const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'ikhda', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
