const { DataTypes } = require('sequelize');
const database = require('../dbInstance');

const users = database.define('users',
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },

        first_name: {
            type: DataTypes.STRING(255),
        },

        last_name: {
            type: DataTypes.STRING(255)
        }

    },
    {
        timestamps: false,
        modelName: 'users',
    }
);

module.exports = users;