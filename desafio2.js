//resolução aceita
let num = parseInt(gets(6));

function get(){
  return num;
}

let newNum = get();

for(var i = 2; i <= newNum; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}