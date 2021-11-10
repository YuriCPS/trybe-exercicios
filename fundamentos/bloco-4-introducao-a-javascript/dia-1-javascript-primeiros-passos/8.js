//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if .

const a = 11;
const b = 21;
const c = 31;

let retorno = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  retorno = true;
  console.log(retorno);
} else {
  retorno = false;
  console.log(retorno);
}
