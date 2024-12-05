
module.exports = class{
    constructor(input){
        this.splitInput = input.split(/\n\s*\n/)
        this.fullInputArray = this.splitInput[0].split("\n")
        //Cap array at 10 for now
        // this.fullInputArray.length = 50
        // console.log('Count: '+this.fullInputArray.length)
    }
    answer(){
        this.answerValue = []
        var digitMap = this.fullInputArray.map(this.mapToDigits, this)
        var digitSum = this.findSum(digitMap)
        this.answerValue.push(`The total digit sum is ${digitSum}`)
        return this.answerValue
    }
    mapToDigits(value){
        
            //TODO Parse first integer in line
            // console.log(value)
            const firstNumIndex = value.search(/[0-9]/)
            const firstNum = value[firstNumIndex] 
            // console.log('First Number: ' +firstNum)
            var splitValue = value.slice(firstNumIndex+1)
            //TODO Parse Second Integer in line
            //Reverse the string, then look for the 'first' number
            var revVal = splitValue.split('').reverse().join('')
            // console.log(revVal)
            const lastNumIndex = revVal.search(/[0-9]/)
            const lastNum = revVal[lastNumIndex] 
            // console.log('Last Number' +lastNum)

            //TODO Return combination of first and second integers
            var newNum = (firstNum == undefined)? '0' : (lastNum == undefined)? `${firstNum}${firstNum}` : `${firstNum}${lastNum}`
            // console.log('New Number: ' +newNum)
            this.answerValue.push(`Number '${newNum}' in '${value}' <br>`)
            return newNum
    }
    findSum(inputArray){
        const sum = inputArray.reduce((total, input) => {
            // console.log('Incoming Input: '+input)
            var parsedNum = parseInt(input)
            // console.log('Parsed int: '+ parsedNum)
            // this.answerValue[index] = `Number: ${parsedNum} + Total: ${total} = ${(total + parsedNum)} <br>`
            // console.log(`Number: ${parsedNum} + Total: ${total} = ${(total + parsedNum)}`)
            total += parsedNum
            return total
        }, 0)
        return sum
    }
}

