var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
})

con.connect(err => {
  if (err) throw err
  console.log("Connected!")
  con.query('create database db_node_mysql',(err,data) => {
  	if(err) throw err 
  	console.log(data)
  })
})