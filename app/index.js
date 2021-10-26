const express = require('express')
const app = express()
const port = 3000

const db_funcs = require("./db_functions");

const con = db_funcs.createSqlConnection()
db_funcs.createTable(con)

app.get('/', (req,res) =>
{
    db_funcs.insertRandomPerson(con);
    const getpeoplesql = 'SELECT name from people'
    query_return = con.query(getpeoplesql, function(err, result, fields){
        console.log(result)
        let text = "<table border='1'>"
        for (let obj in result){
            text += "<tr><td>" + result[obj].name + "</td></tr>"
        }
        res.send('<h1>Full Cycle Rocks!</h1>' + `${text}`)
    })
})

app.listen(port, () => 
{
    console.log('Rodando')
    console.log(process.env.MYSQL_ROOT_USER)
    console.log(process.env.MYSQL_ROOT_PASSWORD)
    console.log(process.env.MYSQL_DATABASE)
    console.log(process.env.MYSQL_HOST)
})