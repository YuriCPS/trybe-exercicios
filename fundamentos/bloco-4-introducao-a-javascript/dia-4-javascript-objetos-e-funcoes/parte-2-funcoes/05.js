// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function maisRepetido(array) {
  let numero = [...new Set(array.sort())]; //
  let arrayContador = [];
  let contador = 0;

  for (let i = 0; i < numero.length; i += 1) {
    contador = 0;
    for (let j = 0; j < array.length; j += 1) {
      if (numero[i] === array[j]) {
        contador += 1;
      }
    }
    arrayContador.push(contador);
  }

  let maisRepete = Math.max(...arrayContador);
  let index = arrayContador.indexOf(maisRepete);

  return numero[index];
}

// Teste
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3, 3, 3, 3, 3]));
