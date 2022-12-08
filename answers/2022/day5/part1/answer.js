
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
        return crateMover9000(this.moveInstructions, this.crateStacks)
    }
}

function crateMover9000(moveInstructions, crateStacks){
    moveInstructions.forEach(element => {
        var instructionArray = element.split(" ")
        var qty = instructionArray[1]
        var src = instructionArray[3]
        var dest = instructionArray[5]
        console.log("move qty "+qty+ " from source "+src+" to dest "+dest)
        for(qty; qty>0; qty--){
            var crate = crateStacks[src-1].pop()
            if(crate != ""){
                crateStacks[dest-1].push(crate)
                console.log(crate+" on top of stack " + dest)
            }            
        }
    })
    //console.log(moveInstructions)
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