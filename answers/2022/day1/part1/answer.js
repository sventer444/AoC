
module.exports = class{
    constructor(input){
        this.fullInputArray = input.split(/\n\s*\n/)
    }
    answer(){
        return cleanInput(this.fullInputArray)
    }
}

function elfSnackCounter(elf){
    var elfTotal = elf.reduce((count, snack) => {
        return Number(count) + Number(snack)
    })
    return elfTotal
}

function cleanInput(input){
    var cleanedInput = input
    var maxSnackTotal = 0
    cleanedInput.map(elf => {
        var count = elfSnackCounter(elf.split("\n"))
        maxSnackTotal = (count>maxSnackTotal)? count : maxSnackTotal
    })
    return maxSnackTotal
}
