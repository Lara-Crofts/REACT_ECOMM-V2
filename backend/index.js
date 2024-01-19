// cd into backend folder
// run npm init & npm init -y --> creates package.json file 
// create index.js file 


// INSTALL DEPENENCCIES .. after download of each make sure it crreated node_modules folder 
// 1. download express : npm install express 
// 2. install: npm install body-parser 
// 3. install: npm install mysql2
// 4. install: npm install nodemon 
// check all dependencies download on package.json file :)



//create express server
// check my running node index.js
// check on browser: http://localhost:3001/


const express = require('express');
const mysql = require('mysql2/promise');
// cors is for security purpose. corrs(), any front end can access backend 
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'SweaterProducts'
});

// Fetch products from the 'items' table
//  test this on http://localhost:3001/products
// run node index.js 
// preferriibly should grab each elements title, id, description.. need category 
app.get('/products', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM items');
    res.json(rows); // can use [0] to see first array/element 
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching products');
  }
});

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});
