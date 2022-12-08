var data=input.split("\,")
data = data.map(Number)
var i
var pos

for (i=0;i<data.length;i+=4){
pos = data[i+3]
if(data[i]==1){
data[pos] = (data[(data[i+1])] + data[(data[i+2])])
}
else if(data[i]==2){
data[pos] = (data[(data[i+1])] * data[(data[i+2])])
}
else if(data[i]==99){
 break
}
}

document.getElementById("output").innerHTML = data[0]
