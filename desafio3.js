const num = [-5, 0, -3, -4, 12];

function getNumbers(){
  return num
}

var numClone = getNumbers();

var par = numClone.filter(numClone => numClone % 2 === 0).length;
var impar = numClone.filter(numClone => numClone % 2 !== 0).length;
var pos = numClone.filter(numClone => numClone > 0).length;
var neg = numClone.filter(numClone => numClone < 0).length;

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${pos} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);

//resolução aceita pela plataforma

var num1 = gets(-5);
var num2 = gets(0);
var num3 = gets(-3);
var num4 = gets(-4);
var num5 = gets(12);

var num = `${num1}, ${num2}, ${num3}, ${num4}, ${num5}`.split(',');

function getNumbers(){
  return num
}

var numClone = getNumbers();

var par = numClone.filter(numClone => numClone % 2 === 0).length;
var impar = numClone.filter(numClone => numClone % 2 !== 0).length;
var pos = numClone.filter(numClone => numClone > 0).length;
var neg = numClone.filter(numClone => numClone < 0).length;

console.log(`${par} valor(es) par(es)`);
console.log(`${impar} valor(es) impar(es)`);
console.log(`${pos} valor(es) positivo(s)`);
console.log(`${neg} valor(es) negativo(s)`);