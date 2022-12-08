var answer=input.split("\n");
var sum =0;
answer.forEach(calcFunc);

function calcFunc(item){
sum+= ((Math.floor(item/3))-2)
}

document.getElementById("output").innerHTML = sum