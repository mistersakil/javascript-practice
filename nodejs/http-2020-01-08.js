var http = require('http');
let mod = require('./module.js');
let server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(mod.test());
  res.write(req.url);
  res.end();
}).listen(8002);
