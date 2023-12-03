
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
        var gamesMap = this.fullInputArray.map(this.handleRound, this)
        // console.log(gamesMap)
        var validGamesMap = gamesMap.map(gameValid => {
            return gameValid.includes(false)? false : true
        })
        // console.log(validGamesMap)
        var gameSum = this.sumGames(validGamesMap)
        this.answerValue.push(`Sum of Valid Games: ${gameSum}`)
        return this.answerValue
    }
    handleRound(gameRound){
        this.answerValue.push(`${gameRound} <br>`)
        var roundGrabs = gameRound.split(":")
        roundGrabs = roundGrabs[1].split(";")
        var validRounds = roundGrabs.map(this.handleGrab, this)
        // console.log('Round Validity Map: '+validRounds)
        var validGames = validRounds.map(round => {
            // console.log(round)
            // console.log(round.includes(false))
            return round.includes(false)? false : true
        })
        // console.log(validRounds.includes(false))
        // var valid = validRounds.includes(false)? false : true
        // console.log('Game Validity: '+validGames)
        return validGames
        // var validGames = gameRoun
    }
    handleGrab(grab){
        //TODO split grab into red blue and green
        var splitGrab = grab.split(',')
        // console.log(splitGrab)
        var validGrabs = splitGrab.map(this.validateCube, this)
        return validGrabs

    }
    sumGames(gameMap){
        return gameMap.reduce((total, gameValid, index) => {
            var gamesum = (gameValid)? (index + 1) : 0
            return total+= gamesum
        }, 0)
    }
    validateCube(cubes){
        var cubesInfo = cubes.split(" ")
        switch(true){
            case cubesInfo[2].includes('red'):
                // console.log(cubesInfo[1])
                return (cubesInfo[1] <= 12) ? true : false
            case cubesInfo[2].includes('green'):
                // console.log(cubesInfo[1])
                return (cubesInfo[1] <= 13) ? true : false
            case cubesInfo[2].includes('blue'):
                // console.log(cubesInfo[1])
                return (cubesInfo[1] <= 14) ? true : false
            default:
                break;
        }
        return false;
    }
}

