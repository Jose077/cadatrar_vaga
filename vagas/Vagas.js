const Sequelize = require('sequelize');
const connection = require('../database/connection');

const Vagas = connection.define('vagas', {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    numvagas: {
        type: Sequelize.STRING,
        defaultValue: true,
        allowNull: true
    }

});

//Vagas.sync({force: true});

module.exports = Vagas;