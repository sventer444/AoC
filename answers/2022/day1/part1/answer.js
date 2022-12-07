
module.exports = class{
    constructor(input){
        this.fullInputArray = input.split("\n\n")
    //console.log(fullInputArray)
    }
    answer(){
        return cleanInput(this.fullInputArray)
    }
}
function elfSnackCounter(elf){
    console.log("Counting elf "+elf)
    var elfTotal = elf.reduce((count, snack) => {
        console.log("Total count: "+ count + " adding snack "+snack)
        return Number(count) + Number(snack)
    })
    console.log("elf total "+elfTotal)
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