var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('input2.txt',function(err, data) {
	  data = data.toString();
	  var pos = data.indexOf('\n');
	  var id;
	  var list = [];
	  var box1;
	  var box2;
	  var differences;
	  while (data != ""){
		  id = data.substr(0,pos);
		  list.push(id);
		  data = data.substr(pos+1);
	  }
	  for (var i = 0; i < list.length; i++){
		  var word1 = list[i].toString();
		  for(var j = i+1; j<list.length;j++){
			differences = 0;
			var word2 = list[j].toString();
			for (var p = 0; p< 26; p++){
				
				var letter1 = word1.substring(p,(p+1));
				var letter2 = word2.substring(p,(p+1));
				if( letter1 != letter2){
					differences++;
				}
			}
			
			if (differences === 1){
				box1 = list[i];
				box2 = list[j];
			}
		  }
	  }
	  res.write("box1: "+box1+"\n box2: "+box2);
    res.end();
  });
}).listen(8080);
