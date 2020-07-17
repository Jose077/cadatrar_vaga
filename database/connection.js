const Sequelize = require('sequelize');

const connection = new Sequelize('localiza', 'root', 'sandeson321', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;