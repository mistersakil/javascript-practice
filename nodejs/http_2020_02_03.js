var http = require('http');
let uc = require('upper-case')
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World! sakil"));
  res.end();
}).listen(8100);
