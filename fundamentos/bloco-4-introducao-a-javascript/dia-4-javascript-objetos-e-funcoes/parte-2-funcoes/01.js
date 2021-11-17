// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(palavra) {
  let palavraArray = palavra.split("");
  let palavraAoContrario = palavraArray.reverse().join("");

  if (palavra === palavraAoContrario) {
    return true;
  } else return false;
}

// Teste
console.log(palindromo("arara"));
