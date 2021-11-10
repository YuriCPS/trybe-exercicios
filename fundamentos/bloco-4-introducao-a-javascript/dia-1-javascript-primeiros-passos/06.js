//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let rei = ["Rei: Todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez."];
let rainha = ["Rainha: Horizontal, vertical e diagonais mas não pode pular outras peças."];
let bispo = ["Bispo: Diagonal. Não pode pular outras peças."];
let cavalo = ["Cavalo: Em forma de “L”. É a única peça que pode pular as outras."];
let torre = ["Torre: Vertical ou horizontal, mas não pode pular outras peças."];
let peao = ["Peão: Uma casa para frente e somente captura outras peças na diagonal."];

let peca = "Peão"; //Recebe o nome da peça de Xadrez
let pecaCorrigida = peca.toLowerCase(); //Deixa o nome da peça em letras minúsculas(Lower Case)
pecaCorrigida = pecaCorrigida.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); //Remove os acentos Fonte: https://www.horadecodar.com.br/2020/12/07/como-remover-acentos-em-javascript/

if (pecaCorrigida === "rei") {
  console.log(rei[0]);
} else if (pecaCorrigida === "rainha") {
  console.log(rainha[0]);
} else if (pecaCorrigida === "bispo") {
  console.log(bispo[0]);
} else if (pecaCorrigida === "cavalo") {
  console.log(cavalo[0]);
} else if (pecaCorrigida === "torre") {
  console.log(torre[0]);
} else if (pecaCorrigida === "peao") {
  console.log(peao[0]);
} else {
  console.log("Essa peça não existe.");
}
