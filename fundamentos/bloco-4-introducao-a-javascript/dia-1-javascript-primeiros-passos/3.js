const a = 10;
const b = 20;
const c = 30;

if (a >= b && a >= c) {
  console.log("a:", a);
} else if (b >= a && b >= c) {
  console.log("b:", c);
} else if (c >= a && c >= b) {
  console.log("c:", c);
} else {
  console.log("Valores iguais ou inválidos");
}
