// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorioAte(n) {
  let soma = 0;

  for (i = 1; i <= n; i += 1) {
    soma = soma + i;
  }
  return soma;
}

// Teste
console.log(somatorioAte(5));
