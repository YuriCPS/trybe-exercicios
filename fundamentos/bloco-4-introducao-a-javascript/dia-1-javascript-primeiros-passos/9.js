//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const a = 11;
const b = 21;
const c = 31;

let retorno = false;

if (a % 2 === 1 || b % 2 === 1 || c % 2 === 1) {
  retorno = true;
  console.log(retorno);
} else {
  retorno = false;
  console.log(retorno);
}
