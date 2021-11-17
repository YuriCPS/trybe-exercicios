// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function indiceDoMaior(array) {
  maior = Math.max(...array);
  return array.indexOf(maior);
}

// Teste
console.log(indiceDoMaior([2, 3, 6, 7, 10, 1, 20]));
