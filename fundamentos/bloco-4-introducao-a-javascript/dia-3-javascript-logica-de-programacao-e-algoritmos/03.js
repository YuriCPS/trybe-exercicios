//Agora inverta o lado do triângulo.

let n = 5;
//Diferente das anteriores onde h=0, nessa h=1 para fazer a subtração correta no for
for (let h = 1; h <= n; h++) {
  //For que 'percorre' a horizontal
  let linha = ""; //Declara linha e zera ela em toda interação 'h++'
  for (let v = 0; v < n - h; v++) {
    //n - h para que retire os espaços com base no for da horizontal
    //For que 'percorre' a vertical adicionando espaços
    linha = linha + " "; //Adiciona os espaços
  }
  for (let v2 = 0; v2 < h; v2++) {
    //For que 'percorre' a vertical da linha gerada no for anterior
    linha = linha + "*"; //Adiciona os '*' na linha gerada no for anterior
  }
  //Imprime a linha depois do for que percorre a vertical
  console.log(linha);
}
