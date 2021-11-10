//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let array = [];

//Gerando o array da questão anterior
for (let i = 0; i < 25; i++) {
  array.push(i + 1);
}
//Realizando a divisão por 2 de cada elemento e imprimindo
for (let i2 = 0; i2 < array.length; i2++) {
  let divisao = array[i2] / 2;
  console.log(divisao);
}
