// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(array) {
  let maior = -Infinity;
  let index = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior) {
      maior = array[i].length;
      index = i;
    }
  }
  return array[index];
}

// Teste
console.log(
  maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
);
