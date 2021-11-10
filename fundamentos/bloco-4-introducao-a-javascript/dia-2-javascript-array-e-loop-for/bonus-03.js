//Ordene o numbers numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];

for (let i = 0; i < numbers.length; i++) {
  if (i + 1 < numbers.length) {
    //Verifica o fim do array
    multiplicado[i] = numbers[i] * numbers[i + 1];
  } else {
    multiplicado[i] = numbers[i] * 2;
  }
}
console.log(multiplicado);
