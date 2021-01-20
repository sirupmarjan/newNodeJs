var http = require('http');
var theDt = require('./theDate')

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write("the date : "+theDt.myDateTime());
  res.end();
}).listen(8080);