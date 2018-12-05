const mysql = require('mysql');
const util = require('util');

const connectionPool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '*********',
    database: 'user_database'
});

connectionPool.query = util.promisify(connectionPool.query);

(async() => {
    try{
        connectionPool.getConnection = util.promisify(connectionPool.getConnection);
      let fetchConnection = await connectionPool.getConnection();
      if (fetchConnection) connection.release()
    }catch(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
    }
})();

module.exports = connectionPool;
