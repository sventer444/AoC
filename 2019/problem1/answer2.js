var answer=input.split("\n");
var sum =0;
answer.forEach(calcFunc);

function calcFunc(item){
if(item <=0){ return 0 }
console.log(calcFunc(((Math.floor(item/3))-2)))
sum+= calcFunc(((Math.floor(item/3))-2))
return item
}

document.getElementById("output").innerHTML = sum