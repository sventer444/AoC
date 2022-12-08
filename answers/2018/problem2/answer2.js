var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('input2.txt',function(err, data) {
	  data = data.toString();
	  var pos = data.indexOf('\n');
	  var id;
	  var threecount =0;
	  var twocount = 0;
	  while (data != ""){
		  id = data.substr(0,pos);
		  if (twoFind(id)) twocount++;
		  if (threeFind(id)) threecount++;
		  data = data.substr(pos+1);
	  }
	  var total = twocount * threecount;
	  res.write(total.toString());
  res.end();
  });
}).listen(8080);

function twoFind(id){
	var confirmed = false;
	var letter;
	for(var i = 0; i<26; i++){
	letter = (i+10).toString(36);
	var re = new RegExp(letter, 'g');
	if ((id.match(re))!= null){
		if((id.match(re)).length == 2) confirmed = true;
	}		
	}
	return confirmed;
}

function threeFind(id){
	var confirmed = false;
	var letter;
	for(var i = 0; i<26; i++){
	letter = (i+10).toString(36);
	var re = new RegExp(letter, 'g');
	if ((id.match(re))!= null){
		if((id.match(re)).length == 3) confirmed = true;
	}		
	}
	return confirmed;
}