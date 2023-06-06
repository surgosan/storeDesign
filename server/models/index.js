const Sequelize = require('sequelize');

const users = require('./users');

const data = {
    users
}

data.sequelize = Sequelize;

module.exports = data;