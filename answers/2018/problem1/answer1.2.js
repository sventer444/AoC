var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var current = 0;
  var matched = undefined;
  var found = [0];
  fileRead(matched, current, found);
  function fileRead(matched, current, found){
  fs.readFile('input1.txt',function(err, data) {
  data = data.toString();
  var num;
  while(matched === undefined && data != ""){
	  num = parseInt(data, 10);
	  current += num;
	  matched = found.find(eqFunc);
	  function eqFunc(value, index, array){
		  return value === current;
	  }
	  found.push(current);
	  if (num < 0)
	  data = data.substr(num.toString().length+1);
	  else data = data.substr(num.toString().length+2);
	  
  }//while
  if(matched != undefined){
  res.write(matched.toString());
  res.end();
  }
  else fileRead(matched, current, found);
  });
  }
}).listen(8080);