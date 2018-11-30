const dbConnection = require('../config/dbConnection');



module.exports = {
    // service to create table in mysql
    createTable: async (req, res) => {
        try {
            let saveUserTableQuery = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
            let saveUser = await dbConnection.query(saveUserQuery);
            return res.status(200).json({ message: 'User saved', data: saveUser });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    // update primary key using auto increment
    updatePrimarykey: async (req, res) => {
        try {
            let updatePrimaryKeyQuery = `ALTER TABLE users ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY`;
            let savePrimaryKey = await dbConnection.query(updatePrimaryKeyQuery);
            return res.status(200).json({ message: 'Primary key updated', data: savePrimaryKey });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    // insert data into table 
    saveInTable: async (req, res) => {
        try {
            let insertQuery = `INSERT INTO users (name, address) values ('ugendar','chennai')`;
            let saveData = await dbConnection.query(insertQuery);
            return res.status(200).json({ message: 'Data saved', data: saveData });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    // insert data into table 
    saveMultipleInTable: async (req, res) => {
        try {
            let values = [['ugi', 'chennai'], ['dhoni', 'ranchi'], ['dk', 'chennai'], ['raina', 'up']]
            let insertQuery = `INSERT INTO users (name, address) VALUES ?`;
            let saveData = await dbConnection.query(insertQuery, [values]);
            return res.status(200).json({ message: 'Data saved', data: saveData });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    },

    // select from table
    selectData: async (req, res) => {
        try {
            let selectQuery = `SELECT * from users`;
            let data = await dbConnection.query(selectQuery);
            return res.status(200).json({ message: 'Available data', data: data });
        } catch (e) {
            console.log(e);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}