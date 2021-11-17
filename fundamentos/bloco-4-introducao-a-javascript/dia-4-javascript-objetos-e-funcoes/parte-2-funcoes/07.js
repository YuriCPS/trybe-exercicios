// rie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word.

function verificaFinal(palavra, final) {
  let verifica = palavra.slice(-final.length);

  if (palavra.length >= final.length) {
    if (final === verifica) {
      return true;
    } else {
      return false;
    }
  } else {
    return console.log("O final é maior que a palavra!");
  }
}

// Teste
console.log(verificaFinal("trybe", "ybe"));
