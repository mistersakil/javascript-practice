let js = require('./Javascript_20200204.js')
exports.tutorial_node = function(){
	console.log('Node js tutorial')
	 return function(){ 
		js.tutorial() 
	}
}

exports.square = function(num){
	return (num2,callback) => callback(num,num2)
}