
module.exports = class{
    constructor(input){
        this.fullInputArray = input.split(/\n\s*\n/)
    }
    answer(){
        var top3 = cleanInput(this.fullInputArray)
        var total = Number(top3[0]) + Number(top3[1]) + Number(top3[2])
        return total
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
    var topSnacks = [0, 0, 0]
    cleanedInput.map(elf => {
        var count = elfSnackCounter(elf.split("\n"))
        if(Number(count) > Number(topSnacks[2])){
            topSnacks = sortSnacks(topSnacks, count)
        }
    })
    return topSnacks
}

function sortSnacks(topSnacks, count){
    topSnacks.pop()
    topSnacks.push(count)
    topSnacks.sort((a, b) => {
        return b - a
    })
    return topSnacks
}