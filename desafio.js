const nums = [7, -5, 6.4, -3, 2, 9];

const positivo = nums.filter(nums => nums > 0);

var contador = positivo.length

console.log(`${contador} valores positivos`);

//Resolução aceita pela plataforma

var num1 = gets(7);
var num2 = gets(-5);
var num3 = gets(6);
var num4 = gets(-3.4);
var num5 = gets(4.6);
var num6 = gets(12);

var num = `${num1}, ${num2}, ${num3}, ${num4}, ${num5}, ${num6}`.split(',');
 
function get(){
  return num
}

var teste = get();

var positivo = teste.filter(nums => nums > 0);

var contador = positivo.length

console.log(`${contador} valores positivos`);