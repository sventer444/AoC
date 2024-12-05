
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
        var cardTotals = this.fullInputArray.map(this.handleCards, this)
        var cardsTotalScore = cardTotals.reduce((total, score) => {
            return total += score
        }, 0)
        this.answerValue.push(`Cards Total Value: ${cardsTotalScore}`)
        return this.answerValue
    }
    handleCards(card){  
        // console.log(card)
        var cardValues = card.split("|")
        // console.log(cardValues)
        var cardScore = this.determinePoints(cardValues)
        this.answerValue.push(`${card} with Score: ${cardScore} <br>`)
        return cardScore
    }
    determinePoints(card){
        var matchSheet = card[0].split(":")[1].split(" ")
        var scoreSheet = card[1].trim(-2).split(" ")
        // Remove empty strings
        matchSheet = matchSheet.reduce((total, value) => {
            if(value != ""){
                total.push(value)
            }
            return total
        }, [])
        scoreSheet = scoreSheet.reduce((total, value) => {
            if(value != ""){
                total.push(value)
            }
            return total
        }, [])
        // console.log(`Required scores: ${matchSheet}, Revised: ${revisedMatch}`)
        // console.log(`Required scores: ${matchSheet}, Scores: ${scoreSheet}`)
        var cardScoreTotal = 0
        for(var i =0; i<scoreSheet.length; i++){
            if(matchSheet.includes(scoreSheet[i])){
                cardScoreTotal = (cardScoreTotal == 0) ? 1 : (cardScoreTotal*2)
            }
        }
        return cardScoreTotal
    }
}

