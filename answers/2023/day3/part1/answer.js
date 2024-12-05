
module.exports = class{
    constructor(input){
        this.splitInput = input.split(/\n\s*\n/)
        this.fullInputArray = this.splitInput[0].split("\n")
        //Cap array at 10 for now
        // this.fullInputArray.length = 10
        // console.log('Count: '+this.fullInputArray.length)
    }
    answer(){
        this.answerValue = []
        return this.answerValue
    }
}

