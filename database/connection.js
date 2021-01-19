const Sequelize = require('sequelize');

const connection = new Sequelize('localiza', '******', '********', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
