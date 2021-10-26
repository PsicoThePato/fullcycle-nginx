const mysql = require('mysql');
const faker = require('faker');


function createSqlConnection(){
    const con = mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_ROOT_USER,
        password: process.env.MYSQL_ROOT_PASSWORD,
        database: process.env.MYSQL_DATABASE
    });
    return con
}


function createTable(con){
        var sql = `CREATE TABLE if not exists people (id int not null auto_increment,
            name VARCHAR(255), primary key(id))`;
        con.query(sql, function (err, result){
            if (err) throw err;
            console.log("Table created");
            console.log(result)
        });
}


function insertRandomPerson(con){
    var randomName = faker.name.findName();
    insertQuery = `INSERT INTO people (name) VALUES('${randomName}');`;
    con.query(insertQuery, function(err, result){
        if(err) throw err;
    });
}

module.exports = {createSqlConnection, createTable, insertRandomPerson};