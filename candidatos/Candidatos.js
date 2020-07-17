const Sequelize = require('sequelize');
const connection = require('../database/connection');
const Vagas = require('../vagas/Vagas');

const candidatos = connection.define('candidatos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


Vagas.hasMany(candidatos);
candidatos.belongsTo(Vagas);

//candidatos.sync({force: true});

module.exports = candidatos;