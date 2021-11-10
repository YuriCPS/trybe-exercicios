//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let impares = 0;
let pares = 0;

//Verifica se é par ou impar e adiciona +1 de acordo com a condição
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    pares++;
  } else {
    impares++;
  }
}

if (pares === 0) {
  console.log("Nenhum valor par encontrado.");
} else {
  console.log("Pares:", pares);
}

if (impares === 0) {
  console.log("Nenhum valor ímpar encontrado.");
} else {
  console.log("Ímpares:", impares);
}
