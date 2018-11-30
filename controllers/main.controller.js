const dbConnection = require('../config/dbConnection');



module.exports = {
    // service to create table in mysql
    createTable: async (req, res) => {
        try {
            let saveUserTableQuery = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
            let saveUser = await dbConnection.query(saveUserQuery);
            return res.status(200).json({
                message: 'User saved',
                data: saveUser
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },

    // update primary key using auto increment
    updatePrimarykey: async (req, res) => {
        try {
            let updatePrimaryKeyQuery = `ALTER TABLE users ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`;
            let savePrimaryKey = await dbConnection.query(updatePrimaryKeyQuery);
            return res.status(200).json({
                message: 'Primary key updated',
                data: savePrimaryKey
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },

    // insert data into table 
    saveInTable: async (req, res) => {
        try {
            let insertQuery = `INSERT INTO users (name, address) values ('ugendar','chennai')`;
            let saveData = await dbConnection.query(insertQuery);
            return res.status(200).json({
                message: 'Data saved',
                data: saveData
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },

    // insert data into table 
    saveMultipleInTable: async (req, res) => {
        try {
            let values = [
                ['ugi', 'chennai'],
                ['dhoni', 'ranchi'],
                ['dk', 'chennai'],
                ['raina', 'up']
            ]
            let insertQuery = `INSERT INTO users (name, address) VALUES ?`;
            let saveData = await dbConnection.query(insertQuery, [values]);
            return res.status(200).json({
                message: 'Data saved',
                data: saveData
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },

    // select from table
    selectData: async (req, res) => {
        try {
            let selectQuery = `SELECT * FROM users`;
            let data = await dbConnection.query(selectQuery);
            return res.status(200).json({
                message: 'Available data',
                data: data
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },
    // Queries using wild cards 

    wildcards: async (req, res) => {
        try {
            let selectQuery = `SELECT * FROM users WHERE name LIKE 'u%'`;
            let data = await dbConnection.query(selectQuery);
            return res.status(200).json({
                message: 'Available data',
                data: {
                    startWith_U: data
                }
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },

    // Queries using escape to avoid SQL injection

    evalQuery: async (req, res) => {
        try {

            let name = 'ugi';
            let address = 'chennai';
            let selectQuery = `SELECT * FROM users WHERE name = ? OR address = ?`;
            let data = await dbConnection.query(selectQuery, [name, address]);
            return res.status(200).json({
                message: 'Available data',
                data: data
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },

    // Query to order data
    orderQuery: async (req, res) => {
        try {
            let ascendingQuery = `SELECT * FROM users ORDER BY name ASC`;
            let descendingQuery = `SELECT * FROM users ORDER BY name DESC`
            let data = await Promise.all([dbConnection.query(ascendingQuery), dbConnection.query(descendingQuery)]);
            return res.status(200).json({
                message: 'Available data',
                data: {
                    ascending: data[0],
                    descending: data[1]
                }
            });
        } catch (e) {
            console.log(e);
            return res.status(500).json({
                message: 'Internal server error'
            });
        }
    },

}