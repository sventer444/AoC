var data=input.split("\,")
data = data.map(Number)
var i
var pos
var noun
var verb

for(noun=0;noun<100;noun++){
for(verb=0;verb<100;verb++){
var testdata = data.slice();
testdata[1] = noun
testdata[2] = verb
if(intCode(testdata)==19690720){
document.getElementById("output").innerHTML = (100*noun+verb)
 break
}
}
}

function intCode(newdata){
for (i=0;i<newdata.length;i+=4){
pos = newdata[i+3]
if(newdata[i]==1){
newdata[pos] = (newdata[(newdata[i+1])] + newdata[(newdata[i+2])])
}
else if(testdata[i]==2){
newdata[pos] = (newdata[(newdata[i+1])] * newdata[(newdata[i+2])])
}
else if(newdata[i]==99){
break
}
}
return newdata[0]
}

