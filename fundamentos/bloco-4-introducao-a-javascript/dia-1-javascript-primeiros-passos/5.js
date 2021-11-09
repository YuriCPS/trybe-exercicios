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
