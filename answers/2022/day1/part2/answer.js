
module.exports = class{
    constructor(input){
        this.fullInputArray = input.split("\n\n")
    //console.log(fullInputArray)
    }
    answer(){
        var top3 = cleanInput(this.fullInputArray)
        console.log('top3 '+top3)
        return top3[0] + top3[1] + top3[2]
    }
}

function elfSnackCounter(elf){
    console.log("elf is carrying"+elf)
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
        console.log('calorie count '+ count)
        if(count>topSnacks[2]){
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
    console.log("After sorting, "+topSnacks)
    return topSnacks
}