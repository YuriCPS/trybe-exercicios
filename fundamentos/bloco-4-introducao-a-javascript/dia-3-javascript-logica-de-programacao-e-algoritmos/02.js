//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let n = 5;
let linha = "";

for (let h = 0; h < n; h++) {
  //For que 'percorre' a horizontal
  linha = linha + "*"; //Adiciona um '*' em toda iteração 'h++'
  console.log(linha); //Imprime linha a cada iteração 'h++'
}
