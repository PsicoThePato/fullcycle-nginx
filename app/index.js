const express = require('express')
const app = express()
const port = 3000



const mysql = require('mysql');
const con = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_ROOT_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE people (id int not null auto_increment, name VARCHAR(255), primary key(id))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
});


var faker = require('faker')


app.get('/', (req,res) =>
{
    var randomName = faker.name.findName();
    insertQuery = `INSERT INTO people(name) values(${randomName})`
    con.query(sql)
    con.end()
    res.send('<h1>Pai Careca</h1>')
    const getpeoplesql = 'SELECT name from people'

})

app.listen(port, ()=> 
{
    console.log('Rodando')
})