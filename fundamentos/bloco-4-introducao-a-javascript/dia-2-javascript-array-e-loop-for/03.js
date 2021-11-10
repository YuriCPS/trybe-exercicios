//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let soma = 0;
let media = 0;

for (let i = 0; i < numbers.length; i++) {
  soma = soma + numbers[i];
}

media = soma / numbers.length;

console.log(media);
