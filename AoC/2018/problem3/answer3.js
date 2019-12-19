var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  fs.readFile('input3.txt',function(err, data) {
	  data = data.toString();
	  var claimMatrix = new Array(1001);
	  for(var a =0; a<claimMatrix.length;a++){
		  claimMatrix[a] = new Array(1001);
	  }
	  for(var b =0; b<1001;b++){
		  for(var c=0;c<1001;c++){
			  claimMatrix[b][c] = 0;
		  }
	  }
	  var claim;
	  var pos;
	  var colset =0;
	  var rowset =0;
	  var colitr =0;
	  var rowitr =0;
	  var conflicts =0;
	  var startpos;
	  var endpos;
	  var colindex = 0;
	  var rowindex = 0;
	  for (var i = 1; i<=1373;i++){
		  pos = data.search('\n');
		  claim = data.substr(0,pos);
		  startpos = claim.search('@')+2;
		  endpos = claim.search(',');
		  colset = claim.substring(startpos, endpos);
		  startpos = endpos+1;
		  endpos = claim.search(':');
		  rowset = claim.substring(startpos, endpos);
		  startpos = endpos+2;
		  endpos = claim.search('x');
		  colitr = claim.substring(startpos, endpos);
		  startpos = endpos+1;
		  rowitr = claim.substring(startpos);
		  console.log(claim);
		  for (var j = 0; j<colitr; j++){
			  for(var k =0; k<rowitr; k++){
				  colindex = parseInt(colset,10) + j;
				  rowindex = parseInt(rowset,10) + k;
				  claimMatrix[colindex][rowindex] = claimMatrix[colindex][rowindex] + 1;
				  if ((claimMatrix[colindex][rowindex]) > 1){
					  conflicts++;
					  //console.log(conflicts);
				  }
			  }
		  }
		  
		  data = data.substr(pos+1);
	  }
	  //for(var i = 0; i<1001; i++){
		  //for(var j = 0; j<1001; j++){
			  //res.write(claimMatrix[j][i].toString());
		  //}
		  //res.write("\n");
	  //}
	  res.write(conflicts.toString());
    res.end();
  });
}).listen(8080);

//answer should be 118840
