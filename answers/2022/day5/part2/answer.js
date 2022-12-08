
module.exports = class{
    constructor(input){
        var fullInputArray = input.split(/\r?\n/)
        var dirtyStacks = fullInputArray.slice(0, 8)
        this.crateStacks = cleanInputStacks(dirtyStacks)
        //console.log(crateStacks)
        this.moveInstructions = fullInputArray.slice(10)
        // remove extra empty instruction
        this.moveInstructions.pop()
        //var finalAnswer = crateMover9001(moveInstructions, crateStacks)
    }

    answer(){
        return crateMover9001(this.moveInstructions, this.crateStacks)
    }
}
    

function crateMover9001(moveInstructions, crateStacks){
    moveInstructions.forEach(element => {
        var instructionArray = element.split(" ")
        var qty = instructionArray[1]
        var src = instructionArray[3]
        var dest = instructionArray[5]
        console.log("move qty "+qty+ " from source "+src+" to dest "+dest)
        console.log("original stack " + crateStacks[src-1])
        console.log("stack size is "+crateStacks[src-1].length +" qty is "+qty )
        var pickupStack = crateStacks[src-1].splice(crateStacks[src-1].length -qty)
        console.log("picked up stack "+pickupStack+ ", old stack is "+crateStacks[src-1])
        //console.log("picked up "+ pickupStack+ ", placing on top of " + crateStacks[dest-1])
        crateStacks[dest-1] = crateStacks[dest-1].concat(pickupStack)
    })

    var answer = ""
    crateStacks.forEach(stack => {
        var topCrate = stack.pop()
        answer += (topCrate != "") ? topCrate : "Interpretation Fail"
    })
    return answer
}

function cleanInputStacks(crateStacks){
    var cleanedStacks = new Array(new Array(),
        new Array(),
        new Array(),
        new Array(),
        new Array(),
        new Array(),
        new Array(),
        new Array(),
        new Array()
    );
    crateStacks.forEach(element => {
        var crateRowPositions = element.split("")
        var rowsIndex = 1
        for(i=0;i<9;i++){
            var rowCrate = crateRowPositions[rowsIndex]
            if(rowCrate != "" && rowCrate != " "){
                cleanedStacks[i].push(rowCrate)
            }
            rowsIndex += 4
        }
    });
    //reverse all arrays so they are in correct order for movement
        cleanedStacks.map(stack => { stack.reverse()})
    return cleanedStacks//cleanedStacks
}