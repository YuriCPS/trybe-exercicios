//Ordene o array numbers em ordem decrescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  //Começa com 1 pois vai se referir ao numero seguinte
  for (let i2 = 0; i2 < i; i2 += 1) {
    //Começa com 0 pois vai se referir ao numero anterior
    if (numbers[i] > numbers[i2]) {
      //Verifica o anterior com o posterior
      let position = numbers[i]; //Caso a condição acima seja aceita 'position' recebe o anterior
      numbers[i] = numbers[i2]; //Anterior recebe o valor do posterior
      numbers[i2] = position; //Posterior recebe o valo do anterior armazenada em 'position'
    }
  }
}

console.log(numbers);
