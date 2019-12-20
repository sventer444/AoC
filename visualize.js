function vis2D(){
if( typeof visualize == 'undefined'){
document.getElementById("output").innerHTML = "Unable to visualize this data"
}
else if(Array.isArray(visualize) && Array.isArray(visualize[0])){
var grid = ""
for(var i in visualize){
for(var j in visualize[i]){
grid = grid.concat(visualize[i][j])
}
grid = grid.concat("\n")
}
document.getElementById("output").innerHTML = grid
}

}//visualize function