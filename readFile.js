var fs = require('fs')

export function readFile(fileName){
    fs.readFile('fileName', function(err, data) {
        return data
      });
}