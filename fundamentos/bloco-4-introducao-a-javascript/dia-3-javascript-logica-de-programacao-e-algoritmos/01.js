//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n.

let n = 6;

for (let h = 0; h < n; h++) {
  //For que 'percorre' a horizontal
  let linha = ""; //Declara linha e zera ela em toda interação 'h++'
  for (let v = 0; v < n; v++) {
    //For que 'percorre' a vertical
    linha = linha + "*"; //Adiciona astericos 'n' vezes na linha
  }
  //Imprime a linha depois do for que percorre a vertical adicionando os asteriscos
  console.log(linha);
}
