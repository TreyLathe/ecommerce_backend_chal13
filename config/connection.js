require('dotenv').config();

const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
  host: '127.0.0.1',
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
