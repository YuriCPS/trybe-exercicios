//Depois, faça uma pirâmide com n asteriscos de base:

let n = 7;
//Diferente das anteriores onde h=0, nessa h=1 para fazer a subtração correta no for
for (let h = 1; h <= n; h += 2) {
  //For que 'percorre' a horizontal
  let linha = ""; //Declara linha e zera ela em toda interação 'h+=2'
  for (let v = 0; v < (n - h) / 2; v++) {
    //(n - h)/2 para que retire os espaços com base no for da horizontal
    //For que 'percorre' a vertical adicionando espaços
    linha = linha + " "; //Adiciona os espaços
  }
  for (let v2 = 0; v2 < h; v2++) {
    if (v2 == 0 || v2 == h - 1 || h == n) {
      linha = linha + "*";
    } else {
      linha = linha + " ";
    }
  }
  //Imprime a linha depois do for que percorre a vertical
  console.log(linha);
}
