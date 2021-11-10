//Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const a = 90;
const b = 60;
const c = 30;
let triangulo = false;

if (a <= 0 || b <= 0 || c <= 0) {
  console.log("Ângulo(s) inválido(s)");
} else if (a + b + c === 180) {
  triangulo = true;
  console.log(triangulo, "É um triangulo");
} else {
  triangulo = false;
  console.log(triangulo, "Não é um triangulo");
}
