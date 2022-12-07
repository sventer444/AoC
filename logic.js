
module.exports = class{
    constructor(){
        this.fs = require('fs')
        this.year = 0
        this.day = 0
    }
  
    applyYear(year){
    this.year = year
    }
    
    applyDay(day){
        this.day = day
        var fileDirectory = "./inputs/"+this.year+"/day"+day+"/input.txt"
        if(this.fs.existsSync(fileDirectory)){
            this.fs.readFile(fileDirectory)
        }
        else {
            console.log("requested input file did not exist")
        }
    }
  
  }