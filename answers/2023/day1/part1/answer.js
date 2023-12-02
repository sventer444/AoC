
module.exports = class{
    constructor(input){
        this.splitInput = input.split(/\n\s*\n/)
        this.fullInputArray = this.splitInput[0].split("\n")
        //Cap array at 10 for now
        this.fullInputArray.length = 10
        // console.log('Count: '+this.fullInputArray.length)
    }
    answer(){
        this.answerValue = []
        var digitMap = this.fullInputArray.map(this.mapToDigits, this)
        var digitSum = digitMap.reduce(this.findSum, 0, this)
        this.answerValue.push(`The total digit sum is ${digitSum}`)
        return this.answerValue
    }
    mapToDigits(value){
        
            //TODO Parse first integer in line
            // console.log(value)
            const firstNumIndex = value.search(/[0-9]/)
            const firstNum = value[firstNumIndex] 
            // console.log('First Number: ' +firstNum)
            value = value.slice(firstNumIndex+1)
            //TODO Parse Second Integer in line
            //Reverse the string, then look for the 'first' number
            var revVal = value.split('').reverse().join('')
            // console.log(revVal)
            const lastNumIndex = revVal.search(/[0-9]/)
            const lastNum = revVal[lastNumIndex] 
            // console.log('Last Number' +lastNum)

            //TODO Return combination of first and second integers
            var newNum = (lastNum != undefined)? `${firstNum}${lastNum}` : (firstNum != undefined)? `${firstNum}` : '0'
            // console.log('New Number: ' +newNum)
            // this.answerValue.push(`First Number: ${firstNum} + Last Number: ${lastNum} = ${newNum} <br>`)
            return newNum
    }
    findSum(total, input){
        // console.log('Incoming Input: '+input)
        var parsedNum = parseInt(input)
        // console.log('Parsed int: '+ parsedNum)
        total += parsedNum
        console.log('Total: '+total)
        return total
    }
}

