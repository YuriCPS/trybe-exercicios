// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function indiceDoMaior(array) {
  maior = Math.min(...array);
  return array.indexOf(maior);
}

// Teste
console.log(indiceDoMaior([2, 4, 6, 7, 10, 0, -3]));
