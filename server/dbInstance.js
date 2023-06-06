const Sequelize = require('sequelize');

const database = new Sequelize('testing', 'yecd9riykr9xgp47r8dq', 'pscale_pw_8JbjZEf6LS9EA8hrBzylcI6NmGmWFrhUOIMD4LuqdVI', {
    host: 'aws.connect.psdb.cloud',
    dialect:'mysql',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,        
        }
    }
  });

async function init()
{
    try {
        await database.authenticate();
        console.log('Connection has been established successfully.');        
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

init(); //test if we have a connection

module.exports = database;