
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
        var digitSum = this.findSum(digitMap)
        this.answerValue.push(`The total digit sum is ${digitSum}`)
        return this.answerValue
    }
    mapToDigits(value){
        
            //TODO Parse first integer in line
            var origValue = value
            value = this.iterativeParse(value, false)
            this.answerValue.push(`Round 1 parse: ${origValue} = ${value} <br>`)
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
            // this.answerValue.push(`Number '${newNum}' in '${value}' <br>`)
            return newNum
    }
    parseDigits(input){
        //English Constants
        const englishNumbers = [
            'zero',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine'
        ]
        
        var parsedInput = input;
            switch(true){
                case input.includes(englishNumbers[1]):
                    var index = 1
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[2]):
                    var index = 2
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[3]):
                    var index = 3
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[4]):
                    var index = 4
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[5]):
                    var index = 5
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[6]):
                    var index = 6
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[7]):
                    var index = 7
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[8]):
                    var index = 8
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                case input.includes(englishNumbers[9]):
                    var index = 9
                    console.log(`Found ${englishNumbers[index]} in ${input}`)
                    parsedInput = this.replaceDigits(input, englishNumbers[index], index);
                    break;
                default:
                    console.log('No string found to convert. Exiting loop')
                    break;
            }
        
        return parsedInput
    }
    replaceDigits(string, english, integer){
        var re = new RegExp(english, 'g');

        var replacedString = string.replace(re, integer);
        // console.log(`Replaced ${english} in ${replacedString}`)
        return replacedString
    }
    iterativeParse(input, reverse){

        var index = reverse ? -3 : 3
        var parsedInput = input


        if(!reverse){
            while(index <= input.length){
                var inputSection = input.slice(0, index)
                var parsedSection = this.parseDigits(inputSection)
                if(!inputSection.match(parsedSection)){
                    index = input.length
                    parsedInput = input.replace(inputSection, parsedSection)
                }
                index++
            }
        }
        else{

        }
        return parsedInput
        
    }
    findSum(inputArray){
        const sum = inputArray.reduce((total, input) => {
            // console.log('Incoming Input: '+input)
            var parsedNum = parseInt(input)
            // console.log('Parsed int: '+ parsedNum)
            // this.answerValue[index] = `Number: ${parsedNum} + Total: ${total} = ${(total + parsedNum)} <br>`
            console.log(`Number: ${parsedNum} + Total: ${total} = ${(total + parsedNum)}`)
            total += parsedNum
            return total
        }, 0)
        return sum
    }
}

