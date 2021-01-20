var http = require('http');
var theDt = require('./theDate')

//create a server object:
http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.write("the date : "+theDt.myDateTime());//write a response to the client
  res.end();//end the response
}).listen(8080); //the server object listens on port 8080