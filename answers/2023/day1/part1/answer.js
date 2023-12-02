
module.exports = class{
    constructor(input){
        this.fullInputArray = input.split(/\n\s*\n/)
    }
    answer(){
        return this.cleanInput(this.fullInputArray)
    }
    cleanInput(input){
        console.log(input)
        return input//.split("\n")
    }
}

