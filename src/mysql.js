const mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mariadb',
    user: 'root',
    password: 'root',
    database: 'tech'
});

pool.getConnection((err) => {
    if (err) {
        return console.error('error connecting: ' + err.stack);
    }
    console.log('Connected to database on port 3306');
  });

exports.pool = pool;