var http = require('http');
var uc = require('upper-case');
// console.log(uc);
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("sakil"));
  res.end();

}).listen(8100);