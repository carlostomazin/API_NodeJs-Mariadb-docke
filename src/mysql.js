const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

pool.getConnection((err) => {
    if (err) {
        return console.error('error connecting: ' + err.stack);
    }
    console.log('Connected to database on port 3306');
  });

exports.pool = pool;