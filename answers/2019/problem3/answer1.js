var data=input.split("\n")
var wire1 = data[0].split("\,")
var wire2 = data[1].split("\,")
var i
var j
var currentRow = 1001
var currentCol = 1001
var visualize = []
var row = []

for(j =0;j<2001;j++){
for (i = 0; i < 2001; i++) {
 row.push('*')
}
visualize.push(row)
row=[]
}

visualize[currentRow][currentCol]="O"
for(var w in wire1){
	if(w.includes("R")){
		currentCol++
		for(j=0;j<(parseInt(w.substring(1)));j++){
		console.log("hit")
			visualize[currentRow][currentCol] ="-"
			currentCol++
		}
	}
}

for(var w in wire2){
	if(w.includes("R")){
		currentCol++
		for(j=0;j<(parseInt(w.substring(1)));j++){
		console.log("hit")
			visualize[currentRow][currentCol] ="-"
			currentCol++
		}
	}
}


//document.getElementById("output").innerHTML = wire1

