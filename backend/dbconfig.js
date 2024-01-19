// //  mysql module.
// const mysql = require('mysql2')

// // Declaring connection variables that creates a connection to Database
// const connection = mysql.createConnection({
//     // Sets up connection object with host, database, user, and password values.
//     host: 'localhost',
//     database: 'SweaterProducts',
//     user: 'root',
//     password: 'password',
// });

// // Connect method that uses connection variable to establish connection.
// connection.connect(function (err) {
//     if(err) throw err;
//     console.log('MySql Databse is connected')
// });

// module.exports = connection;

// video.. 



//last revision..
// require('dotenv').config();
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//        // port: 3306,
// });

// let sql = "SELECT * FROM items;";

// pool.execute(sql, function (err, result) {
// if (err) throw err;

// console.log(result);
// });


// module.exports = pool.promise();