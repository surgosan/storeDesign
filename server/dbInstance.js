const Sequelize = require('sequelize');

const database = new Sequelize('testing', 'pnjgmmnwswq84zuobo8e', 'pscale_pw_frskedwFteLuuW4dCJN6Em5uyMeg80ilrkt6DNRD6pt', {
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