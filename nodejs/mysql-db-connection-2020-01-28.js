var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_node_mysql"
})

con.connect(err => {
  	if (err) throw err
  	console.log("Connected!")
	let sql = "create table tbl_users ( "
			+"id int auto_increment primary key, "
			+"name varchar(100) not null, "
			+"email varchar(100) not null, "
			+"password varchar(100) not null "
			+")"
  con.query(sql,(err,data) => {
  	if(err) throw err 
  	console.log(data)
  })
})