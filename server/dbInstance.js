const Sequelize = require('sequelize');

const database = new Sequelize('testing', 'rigygxtr0wfcxpp7qmk2', 'pscale_pw_udAVylD5XEJbalN60JmhP3M6SkIRSE16U10A1X3XXGk', {
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