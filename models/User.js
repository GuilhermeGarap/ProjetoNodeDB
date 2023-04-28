//Iniciando o sequilize
const Sequelize = require('sequelize');

//Vinculando ao index.js
const db = require('./db');

const User = db.define('users', {

//Infos tabelas id, nome, email
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

//Se não existir a tabela, crie
//User.sync();
//TIRA O // DE CIMA PARA FUNCIONAR!

module.exports = User;