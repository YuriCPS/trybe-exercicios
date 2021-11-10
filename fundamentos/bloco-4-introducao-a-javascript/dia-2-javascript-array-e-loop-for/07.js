//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let maiorValor = null;
let menorValor;

//Supondo que não sei o maior valor contido no array, preciso descobrir o maior
//para só assim poder achar o menor ao fazer comparações, visto que null sempre será menor
//e os números são infinitos
for (let i = 0; i < numbers.length; i++) {
  if (maiorValor <= numbers[i]) {
    maiorValor = numbers[i];
  }
}
menorValor = maiorValor;

for (let i = 0; i < numbers.length; i++) {
  if (menorValor >= numbers[i]) {
    menorValor = numbers[i];
  }
}
console.log(menorValor);
