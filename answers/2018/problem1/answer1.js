var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('input1.txt',function(err, data) {
  data = data.toString();
  var answer = 0;
  var num;
  while(data != ""){
	  num = parseInt(data, 10);
	  answer += num;
	  if (num < 0)
	  data = data.substr(num.toString().length+1);
	  else data = data.substr(num.toString().length+2);
  }
  console.log(answer);
  res.end();
  });
}).listen(8080);