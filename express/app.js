var express = require('express')
let app = express()
app.set('view engine', 'jade')
app.get('/', function (req,res){
	res.render('index', {titles:'Home',contents:'Homepage'})
})

app.listen('8006')


