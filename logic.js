
module.exports = class{
    constructor(){
        this.fs = require('fs')
        this.year = 0
        this.day = 0
        this.dayInput;
    }
  
    applyYear(year){
    this.year = year
    }
    
    applyDay(day){
        this.day = day
        var fileDirectory = "./inputs/"+this.year+"/day"+day+"/input.txt"
        if(this.fs.existsSync(fileDirectory)){
            var fileData = this.fs.readFileSync(fileDirectory, {encoding: "utf-8"}, (err, data) => {
                    return data
                 })
            return fileData
        }
        else {
            console.log("requested input file did not exist")
            return "requested input file did not exist"
        }
    }

    fullAnswer(dayInput){
        var result = new Object({
            partOne: this.answerPart('1', dayInput),
            partTwo: this.answerPart('2', dayInput)
        })
        return result
    }
    
    getRandomAscii(){
        var fileDirectory = "./public/ascii/"
        var files = this.fs.readdirSync(fileDirectory, (err, files) => {
            return files
        })
        var file = files[9]//files[Math.floor(Math.random() * files.length)]
        var fileDir = fileDirectory + file
        if(this.fs.existsSync(fileDir)){
            var fileData = this.fs.readFileSync(fileDir, {encoding: "utf-8"}, (err, data) => {
                    return data
                 })
            return fileData
        }
        else {
            console.log("requested ascii did not exist")
            return "Art Failed To Load :("
        }
    }

    answerPart(part, dayInput){
        var answerDirectory = './answers/'+this.year+'/day'+this.day+'/part'+part+'/answer.js'
        if(this.fs.existsSync(answerDirectory)){
            const partlogic = require(answerDirectory)
            var logic = new partlogic(dayInput)
            var answer = logic.answer()
            return (answer != "" && answer != " ")? answer : "Answer Logic Failed"
        }
        else{
            return "No Answer Available"
        }
    }
  }